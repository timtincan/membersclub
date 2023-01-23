const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("signup", { title: "Sign Up" });
});

router.post("/", [
    body("first_name")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("First name must be specified.")
        .isAlphanumeric()
        .withMessage("First name has non-alphanumeric characters."),
    body("last_name")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Last name must be specified.")
        .isAlphanumeric()
        .withMessage("Last name has non-alphanumeric characters."),
    body("username")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Last name must be specified."),
    function (req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render("signup", {
                title: "Sign Up",
                details: req.body,
                errors: errors.array(),
            });
            return;
        }

        bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
            if (err) return next(err);
            const user = new UserModel({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                password: hashedPass,
                member_status: false,
            }).save((err) => {
                if (err) return next(err);
                res.redirect("/");
            });
        });
    },
]);

module.exports = router;
