import React, { useContext, useState } from 'react'
import './ProductCard.css'
import { cartContext } from '../../App'

const ProductCard = ({product}) => {
  const {cart, setCart, cartQty, setCartQty} = useContext(cartContext)
  const [Allproducts] = useState(product)
  let name = Allproducts.name.length>20 ? Allproducts.name.substring(0,20) + "..." : Allproducts.name;

  const AddCart =() =>{
    setCart([...cart, Allproducts])
    setCartQty([...cartQty, Allproducts])
    console.log(cartQty)
  }

  const RemoveCart = () =>{
    setCart(cart.filter((c)=> c.id !== Allproducts.id))
  }
  
  return (
    <div className='ContentCard'>
      <div className='ProductImg'>
            <img src={Allproducts.image} alt={Allproducts.Item} />
        </div>
        <div className='ProductContent'>
            <p className='titles'>{name}</p>
            <p><span>{Allproducts.old_price}</span>  <big>{Allproducts.new_price} $</big></p>

            {
              cart.includes(product) ? (<div className='RemoveButton'>
              <button onClick={RemoveCart}>Remove</button>
            </div>) : (<div className='AddButton'>
                <button onClick={AddCart}>Add</button>
              </div>)
            }
        </div>
    </div>
  )
}

export default ProductCard