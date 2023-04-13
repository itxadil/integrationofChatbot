const express=require('express')
const teacherFeedbackCollections = require('../../schemas/teachersubfeed/teachersubfeedback')
const teacherfeedbackroute=express.Router()



teacherfeedbackroute.post('/teachersubmitfeedback',async(req,res)=>{
    const body=req.body
    console.log("Body",req.body)
    const newcol=new teacherFeedbackCollections(body)
    newcol.save()
    console.log(newcol)
    res.send(newcol)
})

teacherfeedbackroute.get('/teachersubmitfeedback', async(req,res)=>{
    const response=await teacherFeedbackCollections.find()
    console.log(response)
    res.send(response)
})

teacherfeedbackroute.get('/teachersubmitfeedback/:courseCode', async(req,res)=>{
    const response=await teacherFeedbackCollections.find({courseCode:req.params.courseCode})
    console.log(response)
    res.send(response)
})


teacherfeedbackroute.patch('/teachersubmitfeedback/:courseCode', async(req,res)=>{
    const response=await teacherFeedbackCollections.findOneAndUpdate({courseCode:req.params.courseCode}, req.body,{new:true})
    console.log(response)
    res.send(response)
})

module.exports=teacherfeedbackroute