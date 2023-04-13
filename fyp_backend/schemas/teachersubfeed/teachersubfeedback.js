const mongoose=require('mongoose')
const teacherFeedSchema=new mongoose.Schema({
    courseCode:String,
    section:String,
    student:String,
    feedback:String
})

const teacherFeedbackCollections=mongoose.model('teacherfeedbacks', teacherFeedSchema)

module.exports=teacherFeedbackCollections