const express=require('express');
const stufeedcoll = require('../../schemas/studentfeedback/studentfeedbackschema');
const stufeedbackrouter=express.Router()
stufeedbackrouter.post('/studentfeedback',async(req,res)=>{
    console.log(req.body)
    const body=req.body;
    const collection=new stufeedcoll(body)
    collection.save()
    console.log("StudentFedback", collection)
    res.send(collection)
})
stufeedbackrouter.get('/studentfeedback',async(req,res)=>{
    const collection=await stufeedcoll.find()
    console.log("collection",collection)
    res.send(collection)
})
stufeedbackrouter.get('/studentfeedback/:courseCode', async(req,res)=>{
    const collection=await stufeedcoll.find({course:req.params.courseCode})
    console.log("collection",collection)
    res.send(collection)
})
stufeedbackrouter.patch('/studentfeedback/:quiz',async(req,res)=>{
    const collection=await stufeedcoll.findOneAndUpdate({quiz:req.params.quiz},req.body,{new:true})
    console.log("collection",collection)
    res.send(collection)
})
stufeedbackrouter.delete('/studentfeedback/:quiz',async(req,res)=>{
    const collection=await stufeedcoll.findOneAndDelete({quiz:req.params.quiz},{new:true})
    res.send("!Deleted")
})

module.exports=stufeedbackrouter