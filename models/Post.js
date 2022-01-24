
const Mongoose = require("mongoose");
const PostSchema = new Mongoose.Schema({
    post: String,
}, {
    versionKey: false, timestamps: true
});

module.exports = Mongoose.model("post", PostSchema);