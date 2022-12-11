const mongoose = require("mongoose")
const Banner1 = mongoose.Schema({
    title:String,
    description:String,
    button:String,
    image:String,
})
module.exports = mongoose.model("banner1",Banner1)