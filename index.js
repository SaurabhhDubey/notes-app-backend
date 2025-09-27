const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express() ;

app.use(express.json());
app.use(cors());

const port = 3000

app.get("/" , (req , res)=>{
    res.send("saurabh dubey");
})

app.listen(3000 , ()=>{
    console.log(`app is listening on ${port}`)
})