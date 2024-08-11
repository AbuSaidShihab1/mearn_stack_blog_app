import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './page/Home'
import Header from './components/Header'
import Blog from './page/Blog'
import Post from './page/Post'
import Updateblog from './page/Updateblog'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/"element={<Home/>}/>
        <Route exact path="/blogs"element={<Blog/>}/>
        <Route exact path="/post"element={<Post/>}/>
        <Route exact path="/update-blog/:id"element={<Updateblog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App