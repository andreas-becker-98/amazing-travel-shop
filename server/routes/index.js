const router = require("express").Router();

const productRoutes = require("./product");

const User = require('../models/user');
const { checkPassword, signToken } = require('../utils/auth');


router.get("/api", (_, res) => {
    res.json({ message: "Welcome to the API" });
});

router.get("/api/auth", async (req, res) => {
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
        res.statusCode(400);
        return;
    }

    if(!checkPassword(req.body.password, userData.dataValues.password)) {
        res.statusCode(400);
        return;
    }

    res.json({token: signToken(userData.dataValues) });
});

router.use("/api/products", productRoutes);

module.exports = router;