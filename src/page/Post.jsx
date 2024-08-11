import React, { useState } from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const Post = () => {
    const [title,settile]=useState();
    const [photo,setphoto]=useState();
    const [description,setdescription]=useState();
   
    // haddleform
    function haddleform(e){
          e.preventDefault();
          toast.success("Your post has been added!")
        axios.post("http://localhost:8000/post",{title,photo,description})
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
            <form action=""onSubmit={haddleform}>
                <input type="text"onChange={(e)=>{settile(e.target.value)}} placeholder='Title:' /><br/>
                <input type="text"onChange={(e)=>{setphoto(e.target.value)}}placeholder='Photo:' /><br/>
                 <textarea name="description"onChange={(e)=>{setdescription(e.target.value)}}placeholder='Description:'></textarea><br/>
                 <button>Post</button>
            </form>
        </div>
    </div>
  )
}

export default Post