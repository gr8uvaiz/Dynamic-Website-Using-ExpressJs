const mongoose = require("mongoose")
const Detail = mongoose.Schema(
    {
        brandName:String,
        brandLogo:String,
        links:[
            {
                label:String,
                url:String,
            }
        ],
    }
)

module.exports = mongoose.model("detail",Detail)