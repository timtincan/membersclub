const express = require("express");
const mongoose = require("mongoose");
const async = require("async");
const PostModel = require("../models/post");
const UserModel = require("../models/user");

const router = express.Router();

/*
const postObjects = [
    {
        body: "This is a first post",
    },
];

function createPost(postObj, cb) {
    const post = PostModel({
        body: postObj.body,
        author: postObj.author,
        date: new Date(),
    });

    UserModel.findOne({ username: "timtso" }).exec(function (err, user) {
        if (err) console.log(err);
        console.log(user);
        post.author = user._id;
    });

    console.log(postObj.author);

    const newUser = new UserModel({
        first_ame: "T",
        last_name: "T",
        username: "T",
        password: "T",
        member_status: false,
    });

    console.log(postObj);

    post.save((err) => {
        if (err) {
            cb(err, null);
            return;
        }
    });
}

async.series(
    [
        function (cb) {
            createPost(postObjects[0], cb);
        },
        function (cb) {
            createPost(postObjects[1], cb);
        },
        function (cb) {
            createPost(postObjects[2], cb);
        },
        function (cb) {
            createPost(postObjects[3], cb);
        },
        function (cb) {
            createPost(postObjects[4], cb);
        },
    ],
    function (err, results) {
        if (err) console.log(err);
    }
);
*/

/* GET home page. */
router.get("/", function (req, res, next) {
    PostModel.find({})
        .populate("author")
        .exec((err, allPosts) => {
            if (err) return next(err);
            console.log(allPosts);
            res.render("index", { title: "Members Club", posts: allPosts });
        });
});

router.post("/", function (req, res, next) {
    const post = new PostModel({
        author: req.user._id,
        body: req.body.create_post,
        date: new Date(),
    }).save((err) => {
        if (err) return next(err);
        res.redirect("/");
    });
});

module.exports = router;
