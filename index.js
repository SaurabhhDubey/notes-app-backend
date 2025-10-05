require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express() ;

app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI ; 

mongoose.connect(MONGO_URI)
.then(()=>console.log("mongoose database connected"))
.catch(err=>console.log(err));

const port = process.env.PORT || 3000 ;

app.get("/" , (req , res)=>{
    res.send("notes is working");
})

app.listen(port , ()=>{
    console.log(`app is listening on ${port}`)
})