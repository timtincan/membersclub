const mongoose = require("mongoose");
// const UserModel = require("./user");
// const PostModel = require("./post");
// const async = require("async");
require("dotenv/config");

mongoose.set("strictQuery", false);

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
}

module.exports = main;

/*
function createUser(
    first_name,
    last_name,
    username,
    password,
    member_status,
    cb
) {
    const user = new UserModel({
        first_name,
        last_name,
        username,
        password,
        member_status,
    });

    user.save((err) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, user);
    });

    return user;
}

function createPost(author, body, cb) {
    const post = new PostModel({
        author,
        body,
    });

    post.save((err) => {
        if (err) {
            cb(err, null);
            return;
        }
        cb(null, post);
    });
}

async.waterfall(
    [
        function (cb) {
            createUser("tim", "t", "timtso", "asdfasdf", true, cb);
        },
        function (user, cb) {
            createPost(user._id, "I am a post", cb);
        },
    ],
    function (err, results) {
        if (err) console.log(err);
        mongoose.connection.close();
    }
);

*/