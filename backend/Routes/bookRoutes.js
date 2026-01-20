const express=require("express")
const route=express.Router()
const {addBook,fetchBook,deleteBook,searchBook}=require('../Controller/bookController')

route.post('/addbook',addBook)
route.get('/fetchbook',fetchBook)
route.delete('/deletebook/:id',deleteBook)
route.get('/searchBook',searchBook)
module.exports=route