import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookAdd = () => {
  const naviget = useNavigate()
   
         const [book,setBook]=useState({
             title:'',
             author:'',
             genre:'',
             rating:''
         })
         const [message,setMessage]=useState('')
         /* ****handle change of input**** */
         const handleChange=(e)=>
         {
            setBook({...book,[e.target.id]:e.target.value})
         }
     
         /* **** handle submit **** */
          const handleSubmit=async()=>{
            try{
                 const res=await fetch('http://localhost:5000/book/addbook',{
                 method:'POST',
                 headers:{
                     'content-type':'application/json'
                 },
                 body:JSON.stringify(book)
             })
             const data=await res.json()
             console.log("data of book",data)
             if(res.ok)
                setMessage(data.message)
            
         }
          catch(error){
            console.log("Add book error",error)
            setMessage(error.message)
         }
        }
        const viewpage=()=>{
           naviget("/viewbook")
        }
       
  return (
    <div>
      <h1>Add Book</h1>
      <input type='text' 
        placeholder='Enter Book Title...' 
        id='title' value={book.title} 
        onChange={handleChange}/><br/>
      <input type='text'
      placeholder='Enter Author Name...'
      id='author' 
      value={book.author}
      onChange={handleChange}/><br/>
      <input type='text'
      placeholder='Enter Genre of Book...'
      id='genre'
      value={book.genre}
      onChange={handleChange}/><br/>
      <input type='number'
      id='rating'
      value={book.rating}
      onChange={handleChange}
      placeholder='Enter Rating between 1 to 5...'/><br/>
      <button onClick={handleSubmit}>Add Book</button>

      <button onClick={viewpage}>View Book</button>

      {<p>{message}</p>}
    </div>
  )
}

export default BookAdd
