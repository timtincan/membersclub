const express = require("express");
require("dotenv/config");
const UserModel = require("../models/user");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("joinclub", { title: "Join the Club" });
});

router.post("/", function (req, res, next) {
    if (process.env.CLUB_CODE === req.body.club_code) {
        UserModel.findOneAndUpdate(
            { username: req.user.username },
            { member_status: true },
            function (err) {
                if (err) return next(err);
                res.redirect("/");
            }
        );
    }
});

module.exports = router;
