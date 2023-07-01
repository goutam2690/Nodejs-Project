const express = require("express");
const app = express();
// const hbs = require("hbs");
const path = require("path");
const PORT  = 8000;


//public static path
const staticPath = path.join(__dirname , "../public");

app.set("view engine" , "hbs");

app.use(express.static(staticPath));



// routing 
app.get("/" , (req,res)=>{
    res.render('index');
});

app.get("/about" , (req, res,err)=>{
    res.render("about");
});

app.get("/weather" , (req,res)=>{
    res.render("weather");
});

app.get("*" , (req,res)=>{
    res.render('404Error' , {
        errMsg : "Oops ! Page Not Found",
    });
});

app.listen(PORT , ()=>{
    console.log("server is working on 8000");
})


