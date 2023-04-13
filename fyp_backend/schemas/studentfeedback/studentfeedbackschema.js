const mongoose=require('mongoose')

const stufeed=new mongoose.Schema({
    course: String,
    quiz: String,
    feedback:String
})

const stufeedcoll=mongoose.model('stufeedback',stufeed)

module.exports=stufeedcoll