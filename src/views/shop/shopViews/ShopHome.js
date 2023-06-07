import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import './shop.scss'
import creative from '../../../assets/images/creative-design.png'
import cupcake from '../../../assets/images/cupcake.png'
import soap from '../../../assets/images/soap.png'
import gift from '../../../assets/images/gift.png'

const ShopHome = () => {


  return (
    <section className='shop'>
    <h2>~ Queen Bean Shop ~</h2>
    <nav className='shopNav'>
        <div className='shopLeft'>
            <Link to="/sweetshop"><img src={cupcake} className='shopIcon' alt='the sweet tooth' ></img></Link>
            <img src={soap} className='shopIcon' alt='The sweet and salty soap'/>            <img src={creative} className='shopIcon' alt='The sweet and salty soap box' />
            <img src={gift} className='shopIcon' alt='The sweet and salty soap box' />
            
        
            </div>
            <div className='shopRight'>cart</div>
            </nav>
            <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique quidem expedita porro beatae nesciunt nemo praesentium, cum minima omnis minus voluptates adipisci pariatur dicta architecto totam ex consequuntur perferendis!
            <br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sint et neque corrupti quaerat eum consectetur nemo autem consequuntur libero illo id temporibus, repellat exercitationem. Architecto, voluptatibus. Eaque, ipsa corrupti?
            <br></br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi placeat dolores beatae officia, maiores enim dolor voluptas quas! Eligendi modi dolores doloribus reiciendis neque facilis animi! Sunt, dolorum eligendi.
            </main>
            <Footer />
            
            </section>
            
            )
          }
          
          export default ShopHome
          // <Link to="/tumblers">tumblers</Link>
          // <Link to="/pens">dip pens</Link>
          // <Link to="/pins"> pins | pushpins</Link>
          // <Link to="/lovemugs">love mugs</Link>
          // <Link to="/vinyls">vinyls</Link>
          // <Link to="/straws">collapsible straws</Link>