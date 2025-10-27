import express from "express";
import Note from "../models/notes.model"; "../models/notes.model.js" ;
import authMiddleWare from "../middleware/auth.js";

const router = express.Router();

//create notes

router.post("/" , authMiddleWare , async(req , res)=>{
    const{title , content} = req.body;
    const note = new Note({title , content , userId: req.user.id});
    await note.save();
    res.json(note);
});

// get notes
router.get("/" , authMiddleWare , async(req , res)=>{
    const notes = await Note.find({userId : req.user.id});
    res.json(notes);
});

// update notes
router.put("/:id", authMiddleWare, async(req , res)=>{
    const {title , content} = req.body;
    const note = await Note.findOneAndUpdate(
        {_id: req.params.id , userId:req.user.id},
        {title , content},
        {new : true}
    );
    res.json(note);
});


//delete notes
router.delete("/:id" , authMiddleWare , async(req , res)=>{
    await Note.findOneAndDelete({_id: req.params.id , userId:req.user.id});
    res.json({message:"Note deleted"});
});

export default router;
