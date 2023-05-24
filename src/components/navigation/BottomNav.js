import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styling/nav.scss'

const BottomNav = () => {
  return (
    <nav className='bottomNav'>
        <Link to="/">HOME</Link>
        <Link to="/contact">CONTACT</Link>
        <a href="https://www.facebook.com/queenbeandesigncafe" target="blank">facebook</a>
    
        </nav>
  )
}

export default BottomNav