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