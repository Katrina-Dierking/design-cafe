import React from 'react'
import '../../assets/styling/headerAndFooter.scss'
import Nav from '../navigation/Nav'
import queen from '../../assets/images/queen2.png'

const Header = () => {
  return (
    <header>
      <div>
          <img src={queen} alt="queen bee in pink" />
       <p>Let's create something great together!</p>
      </div>

      <Nav />
    </header>
  );
}

export default Header