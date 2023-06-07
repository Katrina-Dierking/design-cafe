import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styling/nav.scss'

const Nav = () => {
  return (
    <nav>

    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/blog">BLOG</Link>
    <Link to="/hives">HIVES</Link>
    <Link to="/shop">SHOP</Link>
    </nav>
    );
  }
  
  export default Nav