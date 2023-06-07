import React from 'react'
import '../../assets/styling/headerAndFooter.scss'
import Nav from '../navigation/Nav'

const Header = () => {
  return (
    <header>
      <div>
        <h2>
          Queen Bean <span>Design</span> Cafe
        </h2>
        <p>Let's build something great together!</p>
      </div>

      <Nav />
    </header>
  );
}

export default Header