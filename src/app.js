const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register  = require("./models/register");
const { register } = require("module");
const port = process.env.port  || 3001;

const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");
app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.set("views" , template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/" , (req,res) => {
    res.render("index" , {qrImages});
});

app.get("/register" , (req,res) => {
    res.render("register");
});

app.post("/register" , async (req,res) => {
    try{
        const data = new Register({
            name : req.body.name,
            email : req.body.email,
            contact : req.body.contact,
            team : req.body.team
        });

        if (req.body.team === "2") {
            second_member_name = req.body.second_member_name;
            second_member_email = req.body.second_member_email;
            second_member_contact = req.body.second_member_contact;
        }

        const registered = await data.save();
        res.status(201).render("index");
    }catch(e){
        res.status(400).send(e);
        res.send("sorry connection failed")
    }
});

app.listen(port, () =>{

})

const qrImages = {
    qr200: '/assets/200.png',
    qr300: '/assets/300.png',
    qr350: '/assets/500.png',
    qr500: '/assets/300.png'
  };



