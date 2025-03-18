const router = require("express").Router();

router.get("/api", (_, res) => {
    res.json({ message: "Welcome to the API" });
});

module.exports = router;