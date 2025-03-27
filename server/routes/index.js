const router = require("express").Router();

const productRoutes = require("./product");

const User = require('../models/user');
const { checkPassword, signToken, hashPassword } = require('../utils/auth');


router.get("/api", (_, res) => {
    res.json({ message: "Welcome to the API" });
});

router.post("/api/auth", async (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.sendStatus(400);
        return;
    }

    const userData = await User.findOne({
        attributes: ['id', 'email', 'name', 'address', 'password'],
        where: {
            email: req.body.email,
        }
    });

    if(!userData) {
        // user does not exist
        res.sendStatus(400);
        return;
    }

    if(!checkPassword(req.body.password, userData.dataValues.password)) {
        res.sendStatus(400);
        return;
    }

    res.json({token: signToken(userData.dataValues) });
});

router.post("/api/signup", async (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.sendStatus(400);
        return;
    }

    let userData;

    try {
        userData = await User.create({
            email: req.body.email,
            password: hashPassword(req.body.password),
            name: "NEW USER",
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
        return;
    }
    

    if(!userData) {
        // user does not exist
        res.sendStatus(400);
        return;
    }

    res.json({token: signToken(userData.dataValues) });
});

router.use("/api/products", productRoutes);

module.exports = router;