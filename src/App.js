
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import Cartfn from './Components/Cart/Cartfn';
import HeaderComponent from './Components/Header/Header';
import { createContext, useState } from 'react';
import Contents from './Components/Files/Contents'; 

export const cartContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  let [cartQty, setCartQty] = useState([])

  const QtyUpdate = (item) => {
    // setCartQty((oldCart) => {
    //   // return {...oldCart,[item]: (oldCart[item] || 0) + 1,};
    //   cart.forEach((a)=>{
    //     oldCart.push(a)
    //   })
    //   console.log(cartQty)
    console.log("Increase Item Quantity")
    // });
  };
  
  return (
    <cartContext.Provider value={{cart, setCart, Contents, cartQty, setCartQty, QtyUpdate}}>
      <BrowserRouter>
        <div>
          <HeaderComponent/>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/cart' element={<Cartfn />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
