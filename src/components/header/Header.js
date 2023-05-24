import React from 'react'
import '../../assets/styling/headerAndFooter.scss'
import Nav from '../navigation/Nav'

const Header = () => {
  return (
    <header>
      <h2>Queen Bean <span>Design Cafe</span></h2>
      <Nav />
    </header>
  )
}

export default Header