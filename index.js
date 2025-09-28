const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express() ;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://saurabhdubey3713_db_user:UrwzcbI6dg4Z2VaH@cluster0.p808nbz.mongodb.net/")
.then(()=>console.log("mongoose database connected"))
.catch(err=>console.log(err));

const port = 3000

app.get("/" , (req , res)=>{
    res.send("saurabh dubey");
})

app.listen(3000 , ()=>{
    console.log(`app is listening on ${port}`)
})