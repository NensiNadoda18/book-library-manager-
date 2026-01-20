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
    

}
module.exports={addBook}