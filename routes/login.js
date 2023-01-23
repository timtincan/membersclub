const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("login", { title: "Log In" });
});

router.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })
);

module.exports = router;
