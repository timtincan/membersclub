const express = require("express");
const UserModel = require("../models/user");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("signup", { title: "Sign Up" });
});

router.post("/", function (req, res, next) {
    const user = new UserModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        member_status: false,
    }).save((err) => {
        if (err) return next(err);
        res.redirect("/");
    });
});

module.exports = router;
