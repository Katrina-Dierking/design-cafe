
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  Home,
  About,
  Blog,
  Contact,
  Login,
  Shop,
  Hives
} from './views/index'

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
