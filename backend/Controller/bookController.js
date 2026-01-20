const Book=require("../Model/book")
const CustomError=require('../utils/error')

const addBook=async(req,res)=>{
    try{
        const {title,author,genre,rating}=req.body

        /* ****validations**** */
        if(!title || title.length<=2) return res.status(300).json({message:"Enter valid Title of Book..!!"})
        if(!author) return res.status(300).json({message:"Enter Author Name of Book..!!"})
        if(rating >5 || rating <1)return res.status(300).json({message:"Enter Rating must be between 1 to 5..!!"})

        Book.create({
            title,
            author,
            genre,
            rating
        })
      
        return res.status(200).json({message:"Book Detail is Added..!!"})
    }
    catch(error){
         console.log("Book Error:",error)
         return res.status(500).json({message:"Server Error",error})
    }
}
const fetchBook=async(req,res)=>{
    try{
         const books=await Book.find({})
         return res.status(200).json({message:"Fetched..!!",book:books})
    }
    catch(error)
    {
        return res.status(500).json({message:"server error",error})
    }
}
const deleteBook=async(req,res)=>{
    try{
        const {book_id} = req.params
        const book=await Book.findOneAndDelete(book_id)
        if(!book) return res.status(300).json({message:"Book Not Found..!!"})
        

        return res.status(200).json({message:"Delete Book..!!"})

    }
    catch(error)
    {
        console.log("delete error",error)
        return res.status(500).json({message:"server error"})
    }
}
const searchBook=async(req,res)=>{
    try{
        const {title}=req.body
        console.log("title",title)
        const match=await Book.find({title:{$regex:new RegExp(`^${title}`,'i')}})// give all result that start with specific letter
        console.log("match",match)
        if(!match) return res.status(300).json({message:"Not Find Anything..!!"})
           
        return res.status(200).json({message:"Yehh..!! Find Book..",match})
    }
    catch(error)
    {
        console.log("Search Error:",error)
        return res.status(500).json({message:"Server error"})
    }

}
module.exports={addBook,fetchBook,deleteBook,searchBook}