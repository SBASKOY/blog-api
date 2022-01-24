const Mongoose = require("mongoose");
const LogSchema = new Mongoose.Schema({
    content: String,
    date: String
}, {
    versionKey: false, timestamps: true
});

module.exports = Mongoose.model("log", LogSchema);