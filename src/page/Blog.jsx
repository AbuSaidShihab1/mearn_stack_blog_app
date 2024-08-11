import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
const Blog = () => {
  const [blog,setblog]=useState([]);
    useEffect(()=>{
      function getdata(){
           axios.get("http://localhost:8000/blog")
           .then((data)=>{
            console.log(data.data.blogdata)
            setblog(data.data.blogdata)
           }).catch((err)=>{
            console.log(err)
           })
      }
      getdata();
    },[])
// deleteblog
function deleteblog(data){
     console.log(data._id);
     axios.delete(`http://localhost:8000/blog/${data._id}`)
     .then((data)=>{
        setblog(data.data.blogdata)
     }).catch((err)=>{
        console.log(err)
     })
}
  return (
    <div className="blog">
        <h1>All Blogs</h1>
        {/* --------------------main--------------- */}
         <div className="main">
            {/* -----------------box------------- */}
           {
             blog.length >0 ? blog.map((data)=>{
                return(
                    <div className="blog_box">
                    <div className="image">
                        <img src={data.photo} alt="" />
                    </div>
                    <div className="text">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className="btn">
                            <button><Link to={`/update-blog/${data._id}`}style={{color:"white",textDecoration:'none'}}>Update</Link></button>
                            <button onClick={()=>{deleteblog(data)}} >Delete</button>
                        </div>
                    </div>
                 </div>
                )
            }):<h1>We do not have any blog!</h1>
           }
            {/* -----------------box------------- */}
         </div>
        {/* --------------------main--------------- */}
    </div>
  )
}

export default Blog