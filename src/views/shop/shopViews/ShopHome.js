import React from 'react'
import Footer from '../../../components/footer/Footer'
import './shop.scss'
import globe from '../../../assets/images/globe.png'
import cupcake from '../../../assets/images/cupcake.png'
import soap from '../../../assets/images/soap.png'
import gift from '../../../assets/images/gift.png'
import queen from '../../../assets/images/queen2.png'

const ShopHome = () => {


  return (
    <section className="shop">
      <div className="titleBox">
      <img src={queen} alt="queen" />
      
      <nav className="shopNav">
      <div className="shopLeft">
      <div className="shoplinks">
      <img src={cupcake} className="shopIcon" alt="the sweet tooth" />
        <p className="shopName">the sweet tooth</p>
        </div>
        
        <div className="shoplinks">
        <img
        src={soap}
        className="shopIcon"
        alt="The sweet and salty soap"
        />
        <p className="shopName">sweet & salty <br/>soap box</p>
        </div>
        
        <div className="shoplinks">
        <img src={globe} className="shopIcon" alt="globe" />
        <p className="shopName">code creations</p>
        </div>
        
        <div className="shoplinks">
        <img src={gift} className="shopIcon" alt="gift shop" />
        <p className="shopName">gift shop</p>
        </div>
        </div>
        <div className="shopRight">
          <p >cart</p>
        </div>
        
        </nav>
        </div>
        <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        similique quidem expedita porro beatae nesciunt nemo praesentium, cum
        minima omnis minus voluptates adipisci pariatur dicta architecto totam
        ex consequuntur perferendis!
        <br></br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sint et
        neque corrupti quaerat eum consectetur nemo autem consequuntur libero
        illo id temporibus, repellat exercitationem. Architecto, voluptatibus.
        Eaque, ipsa corrupti?
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi
        placeat dolores beatae officia, maiores enim dolor voluptas quas!
        Eligendi modi dolores doloribus reiciendis neque facilis animi! Sunt,
        dolorum eligendi.
      </main>
      <Footer />
    </section>
  );
          }
          
          export default ShopHome
          // <Link to="/tumblers">tumblers</Link>
          // <Link to="/pens">dip pens</Link>
          // <Link to="/pins"> pins | pushpins</Link>
          // <Link to="/lovemugs">love mugs</Link>
          // <Link to="/vinyls">vinyls</Link>
          // <Link to="/straws">collapsible straws</Link>