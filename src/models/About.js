const mongoose = require("mongoose")
const About = mongoose.Schema({
    title:String,
    description:String,
    button:String,
})
module.exports = mongoose.model("about",About)