import React, { useContext, useState } from 'react'
import './addtocart.css'
import { CartContext } from '../components/context/CartContext'

const AddtoCart = ({ stock, singleProduct }) => {

  const {addToCart}= useContext(CartContext)

  const { id, name, price } = singleProduct

  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock)
  }
  const decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
  }


  return (
    <div className='spp-inc-dec'>
      <div className='spp-add-to-cart'>
        {/* <div className='spp-add-to-cart-increment' onClick={()=> increment()}>+</div> */}
        <div className='spp-add-to-cart-increment' onClick={increment}>+</div>
        <div className='spp-quantity'>{quantity}</div>
        <div className='spp-add-to-cart-decrement' onClick={() => decrement()}>-</div>
      </div>
      <div className='spp-add-to-cart-button' onClick={() => addToCart(id, name, price, quantity, singleProduct)}>Add to Cart</div>
    </div>
  )
}

export default AddtoCart