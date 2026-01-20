const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    title:{type:String,require},
    author:{type:String,require},
    genre:{type:String},
    rating:{type:Number,require,min:[1,"Rating must be atleast 1"],max:[5,"Rating cannot be more than 5"]},
})
module.exports=mongoose.model('Book',bookSchema)