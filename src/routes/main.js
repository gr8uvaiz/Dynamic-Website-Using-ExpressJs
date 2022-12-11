const express = require('express')
const routes = express.Router()
const detail = require("../models/Detail")
const slider = require("../models/Slider")
const service = require("../models/Service")
const queries = require("../models/Contact")
const banner1 = require("../models/Banner1")
const banner2 = require("../models/Banner2")
const about = require("../models/About")
const gallery = require("../models/Gallery")
routes.get('/', async (req,res)=>{
    const details = await detail.findOne({"_id":"63839f3f44d4359ede74586c"})
    const slides = await slider.find()
    const services = await service.find()
    const banner = await banner1.findOne({"_id":"63864385fa706905e33d8c1a"})
    const banners = await banner2.findOne({"_id":"6386444bd3cef971473f714d"})
    const abouts = await about.findOne({"_id":"6386462e03f72237a6331fa5"})
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        banner:banner,
        banners:banners,
        abouts:abouts,
    })
})
routes.get('/gallery',async (req,res)=>{
    const details = await detail.findOne({"_id":"63839f3f44d4359ede74586c"})
    const galleries = await gallery.find()

    res.render("gallery",{
        details:details,
        galleries:galleries,
    })
})

routes.post("/process-form",async (req,res)=>{
    console.log("Form Submitted")
    console.log(req.body)
    try{
        const data = await queries.create(req.body)
        res.redirect("/")
        console.log(data)
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})

module.exports = routes