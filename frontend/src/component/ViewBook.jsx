import {useEffect, useState} from 'react'

const ViewBook = () => {
    const[message,setMessage]=useState('')
    const [books,setBooks]=useState([])

    const viewbook=async()=>{
        try{
        const res=await fetch('http://localhost:5000/book/fetchbook')
        console.log("res",res)
        if(!res.ok)
            setMessage("error while fetching books ")

        const data=await res.json()

        setBooks(data.book)
        setMessage(data.message)
        
        
       
   }

    catch(error)
    {
        console.log("error")
        setMessage(error.message)
    }
}
useEffect(()=>{
    setTimeout(()=>{
      viewbook();
    },100)

},[])
//<button onClick={viewbook}>View Book</button>
  return (
    <div>
        <h1>View book</h1>
      

      {<p>{message}</p>}
      {books.map((book,index)=>(
        <div key={index} style={{border:'1px solid white',margin:'10px'}}>
            <h3>Book</h3>
            <h2>Title:{book.title}</h2>
            <p>Author:{book.author}</p>
            <p>Genre:{book.genre}</p>
            <p>Rating:{book.rating}</p>
            </div>
      ))}
      
    </div>
  )
}

export default ViewBook
