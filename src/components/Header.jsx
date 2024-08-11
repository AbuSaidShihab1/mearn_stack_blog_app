import React from 'react'
import logo from "../assets/logo.png"
import {NavLink} from "react-router-dom"
import "./Header.css"
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/post">Post</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header