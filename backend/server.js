const express=require("express")
const app=express()
const config=require("./config/config")
const connectDatabase=require("./config/db")

/* **** connect Database **** */
connectDatabase()

/* ****Simple api testing **** */
app.get("/",()=>{
    console.log("hello friend...!!")

})
const port=config.port
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})