
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './Components/AboutPage';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';
import Product from './Components/Product';

import sweet from './Assests/Dessert.json';

export const user = createContext();

function App() {

  var [cartSize, setCartSize] = useState(0);
  var [discount, setDiscount] = useState(0);
  var [totalPrice, setTotalPrice] = useState(0);
  var [cart,setCart] = useState([]);

  return (
    <>
      <user.Provider value={{ cart,setCart,cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice }} >
        <div id='body' style={{ backgroundColor: "var(--bg)" }}>
          <Router >
            <NavBar />
            <Routes>
              <Route path='/' exact element={<Main />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/product/:ID' element={<Product />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </user.Provider>
    </>
  );
}

export default App;
