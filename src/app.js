const express = require("express");
const app = express();
const path = require("path");
const hbs  = require("hbs");

const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));



const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
//set view engine
app.set("view engine","hbs");

app.set("views",template_path);
hbs.registerPartials(partials_path);

//routing
app.get("/", (req,res) => {
    res.render("index");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

app.get("/about", (req,res) => {
    res.render("about");
})


app.get("*", (req,res) => {
    res.render("404error");
})


app.listen(port, () =>{
    console.log(`connection successful.. ${port}`)
})

