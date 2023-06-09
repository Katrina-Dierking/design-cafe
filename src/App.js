
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  Home,
  About,
  Blog,
  Contact,
  Login,
  Shop,
  Hives, 
  University
} from './views/index'

import {
  Tumblers,
  LoveMugs, 
  Pens,
  Pins,
  SweetShop, 
  Vinyls, 
  Straws
} from './views/shop/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hives" element={<Hives />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sweetshop" element={<SweetShop/>} />
          <Route path="/tumblers" element={<Tumblers />} />
          <Route path="/pens" element={<Pens />}/>
          <Route path="/pins" element={<Pins />}/>
          <Route path="/lovemugs" element={<LoveMugs />} />
          <Route path="/vinyls" element={<Vinyls />} />
          <Route path="/straws" element={<Straws />} />
          <Route path="/university" element={<University />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
