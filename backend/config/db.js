const mongoose=require("mongoose")
const config=require("../config/config")
const CustomError = require("../utils/error")

const connectDatabase=async()=>{
    try{
        await mongoose.connect(config.uri)
        console.log("Databse connected..!!")
    }
    catch(error)
    {
        console.log("Database error:",error)
        return next(new CustomError(error,500))
    }
}
module.exports=connectDatabase