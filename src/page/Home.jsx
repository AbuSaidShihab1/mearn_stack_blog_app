import React from 'react'
import Blog from './Blog'

const Home = () => {
  return (
<diV>
<div className="home">
        <div className="box">
            <h1>Post Your Blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vitae ipsam a sit excepturi molestias natus amet reprehenderit architecto sint.</p>
            <button>Explore Now</button>
        </div>
    </div>
    {/* ------blog----------- */}
     <Blog/>
    {/* ------blog----------- */}
</diV>
  )
}

export default Home