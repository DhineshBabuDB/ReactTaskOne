import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { cartContext } from '../../App'

const Cartfn = () => {

const {cart, cartQty, setCartQty, QtyUpdate} = useContext(cartContext)

const [total, setTotal] = useState([0])

let[qty, setQty] = useState(1)

// const handleUpdate = () => {
//   setCartQty([...cartQty, cart])
//   console.log(cartQty)
// }

const handleReduce = () => {
  console.log("bla bla bla")
}

useEffect(()=>{
  setTotal(cart.reduce((a,b)=>a+ parseInt(b.new_price),0))
},[cart,total])

  return (
    <div className='CartContainer'>

        {cart.map((item, index)=>(
          <div className="cart-product" key={index}>
            <div className='cartleft'>
              <div className="cartimg">
                <img src={item.image} alt="img" />
              </div>
              <div className="cart-product-details">
                <h3>{item.name}</h3>
                <p>Amount: {item.new_price}$</p>
              </div>
            </div>

            <div className="itemQuantity">
              <div className="quantityButtons">
                <button onClick={handleReduce}>-</button>
                <span>{qty}</span>
                <button onClick={QtyUpdate}>+</button>
              </div>
              <h4>Amount</h4>
            </div>
          </div>
        ))}

        <h2> Total Amount : {total}$</h2>
    </div>
  )
}

export default Cartfn