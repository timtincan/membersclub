const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User" },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
