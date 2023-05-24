import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import './shop.scss'

const ShopHome = () => {


  return (
    <section className='shop'>
    <h2>SHOP</h2>
    <nav className='shopNav'>
        <div className='shopLeft'>
            <Link to="/sweetshop">sweet shop</Link>
            <Link to="/tumblers">tumblers</Link>
            <Link to="/pens">dip pens</Link>
            <Link to="/pins"> pins | pushpins</Link>
            <Link to="/lovemugs">love mugs</Link>
            <Link to="/vinyls">vinyls</Link>
        </div>
        <div className='shopRight'>cart</div>
    </nav>
      <Footer />
    
    </section>
  
  )
}

export default ShopHome