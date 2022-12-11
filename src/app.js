const express = require('express')
const app = express()
const port = 3000
const routes = require("../src/routes/main")
const hbs = require('hbs')
const mongoose = require("mongoose")
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")
const banner1 = require("./models/Banner1")
const bodyParser = require("body-parser")
const Banner1 = require('./models/Banner1')
const Banner2 = require('./models/Banner2')
const About = require('./models/About')
const Gallery = require('./models/Gallery')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use("/static",express.static("public"))

app.use('',routes)


app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials('views/partials')


mongoose.connect("mongodb://localhost/Dynamic-website-project",()=>{
  console.log("Database Connected")

  // Gallery.create([
  //   {
  //     imgUrl:"/static/images/gallery.jpg",
  //   },
  //   {
  //     imgUrl:"/static/images/gallery.jpg",
  //   },
  //   {
  //     imgUrl:"/static/images/gallery.jpg",
  //   },
  //   {
  //     imgUrl:"/static/images/gallery.jpg",
  //   },
  //   {
  //     imgUrl:"/static/images/gallery.jpg",
  //   },
  //   {
  //     imgUrl:"/static/images/gallery.jpg",
  //   },
  // ])

  // About.create({
  //   title:"About Us",
  //   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo repudiandae hic deleniti ad consequatur pariatur non, corporis libero nesciunt enim. Qui laboriosam enim distinctio molestiae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et natus nobis excepturi officiis deserunt autem sapiente dolores labore maxime nemo? at labore, magni corrupti accusamus ea.",
  //   button:"CLick Here",
  // })

  // Banner2.create({
  //   title:"We work for People, Not for Money",
  //   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat adipisci delectus autem expedita earum corporis, qui alias sunt iste eveniet natus maiores recusandae omnis reprehenderit ipsa repellendus. Corrupti voluptatum suscipit odit.",
  //   button:"CLick Here",
  //   image:"/static/images/banner2.jpeg",
  // })

  // Banner1.create({
  //   title:"We work for People, Not for Money",
  //   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat adipisci delectus autem expedita earum corporis, qui alias sunt iste eveniet natus maiores recusandae omnis reprehenderit ipsa repellendus. Corrupti voluptatum suscipit odit.",
  //   button:"CLick Here",
  //   image:"/static/images/banner1.jpeg",
  // })
  
  // Service.create([
  //   {
  //     icon:"fa-road-bridge",
  //     title:"Infrastructure",
  //     description:"Active Directory, Database Servers Desktop ServerApplication Virtualisation, Desktop Laptops Servers , High Availability and Load balancing solutions, Messaging and collaboration servers",
  //     button:"Get Infra..",
  //     buttonLink:"#",
  //   },
  //   {
  //     icon:"fa-lock",
  //     title:"Security",
  //     description:"2 factor authentication, Anti-spam Solutions ,Advance Threat Protection ,Anti-virus protection, Bandwidth analysis & management",
  //     button:"Get Security",
  //     buttonLink:"#",
  //   },
  //   {
  //     icon:"fa-database",
  //     title:"Storage",
  //     description:"Data Replication, Auto loaders Business Continuity Planning , Automated desktop, laptop backup",
  //     button:"Get Storage",
  //     buttonLink:"#",
  //   },
  //   {
  //     icon:"fa-road-bridge",
  //     title:"Infrastructure",
  //     description:"Active Directory, Database Servers Desktop ServerApplication Virtualisation, Desktop Laptops Servers , High Availability and Load balancing solutions, Messaging and collaboration servers",
  //     button:"Get Infra..",
  //     buttonLink:"#",
  //   },
  //   {
  //     icon:"fa-lock",
  //     title:"Security",
  //     description:"2 factor authentication, Anti-spam Solutions ,Advance Threat Protection ,Anti-virus protection, Bandwidth analysis & management",
  //     button:"Get Security",
  //     buttonLink:"#",
  //   },
  //   {
  //     icon:"fa-database",
  //     title:"Storage",
  //     description:"Data Replication, Auto loaders Business Continuity Planning , Automated desktop, laptop backup",
  //     button:"Get Storage",
  //     buttonLink:"#",
  //   },
  // ])


  // Slider.create([
  //   {
  //     title:"Get your work by proffesionals",
  //     subTitle:"All the work deliver to you with quality content",
  //     imgUrl:"/static/images/img1.jpg",
  //     class:"active",
  //   },
  //   {
  //     title:"Providing the best security ever",
  //     subTitle:"We are providing the best security services at the earliest",
  //     imgUrl:"/static/images/img2.jpg",
  //     class:"active",
  //   },
  //   {
  //     title:"Infrastructure and software",
  //     subTitle:"Take care about all the software and infrastructure related work",
  //     imgUrl:"/static/images/img3.jpg",
  //     class:"active",
  //   },
  // ])






  // Detail.create({
  //   brandName:"Uvaiz IT-Solution",
  //   brandLogo:"https://yt3.ggpht.com/ytc/AMLnZu9NabKRah-wUH4wLD7SkEi4EAyVKB1yzNF3hLNu=s176-c-k-c0x00ffffff-no-rj",
  //   links:[
  //     {
  //       label:"Home",
  //       url:"/",
  //     },
  //     {
  //       label:"About",
  //       url:"/about",
  //     },
  //     {
  //       label:"Gallery",
  //       url:"/gallery",
  //     },
  //     {
  //       label:"Services",
  //       url:"/services",
  //     },
  //     {
  //       label:"Contact Us",
  //       url:"/contact-us"
  //     }
  //   ]
 // })
 }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
