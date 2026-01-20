const express=require("express")
const route=express.Router()
const {addBook}=require('../Controller/bookController')

route.post('/addbook',addBook)

module.exports=route