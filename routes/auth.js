import express from "express" ;
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "..models/user.model.js";


const router = express.Router();

// Register

router.post("/register", async (req , res)=>{
    try{
        const{username , email , password } = req.body ; 

        // Hash password
        const hashedPassword = await bcrypt.hash(password , 10);

        const newUSer = new User({username , email, password:hashedPassword});
        await newUSer.save();

        res.json({message:"user registered succesfully"});
    }
    catch (err) {
        res.status(500).json({erro: err.message});
    }
});

// login
router.post("/login" , async (req , res)=>{
    try {
        const {email , password}= req.body;

        const user= await user.findOne({email});
        if(!user) return res.status(400).json({error:"user not found"});

        const isPasswordValid = await bcrypt.compare(password,user.password);
        if (!isPasswordValid) return res.status(400).json({error:"Invalid password"});

        //jwt token
        const token = jwt.sign({id: user._id} , "secretkey" , {expiresIn:"1hr"});
        res.json({token , userId: user._id})


    } catch (err) {
        res.status(500).json({error:err.message});
    }
});

export default router;