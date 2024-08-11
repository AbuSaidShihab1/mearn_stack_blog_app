import React,{useEffect, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { useParams } from 'react-router-dom';
const Updateblog = () => {
    const [title,settile]=useState();
    const [photo,setphoto]=useState();
    const [description,setdescription]=useState();

    const {id}=useParams();
// data get
   useEffect(()=>{
      function getdata(){
          axios.get(`http://localhost:8000/blog-data/${id}`)
          .then((data)=>{
                console.log(data.data.blogdata)
                settile(data.data.blogdata.title)
                setphoto(data.data.blogdata.photo)
                setdescription(data.data.blogdata.description)
          }).catch((err)=>{
            console.log(err)
          })
      }
      getdata();
   },[])

    // updateblog
   function updateblog(){
      axios.put(`http://localhost:8000/update/${id}`,{title,photo,description})
      .then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div className="post">
    <div className="post-main">
    <Toaster
position="top-center"
reverseOrder={false}
/>
        <h1>Upload Blog</h1>
        <form action=""onSubmit={updateblog}>
            <input type="text"value={title} onChange={(e)=>{settile(e.target.value)}} placeholder='Title:' /><br/>
            <input type="text"value={photo} onChange={(e)=>{setphoto(e.target.value)}}placeholder='Photo:' /><br/>
             <textarea name="description"value={description} onChange={(e)=>{setdescription(e.target.value)}}placeholder='Description:'></textarea><br/>
             <button>Post</button>
        </form>
    </div>
</div>
  )
}

export default Updateblog