import React, { useState } from 'react'
import './addtocart.css'
const AddtoCart = ({ stock }) => {

  const [quanity, setQuantity] = useState(1)

  const increment=()=>{
    quanity< stock ? setQuantity(quanity+1) : setQuantity(stock)
  }
  const decrement=()=>{
    quanity > 1 ? setQuantity(quanity-1) : setQuantity(1)
  }

  return (
    <div className='spp-inc-dec'>
      <div className='spp-add-to-cart'>
        {/* <div className='spp-add-to-cart-increment' onClick={()=> increment()}>+</div> */}
        <div className='spp-add-to-cart-increment' onClick={increment}>+</div>
        <div className='spp-quantity'>{quanity}</div>
        <div className='spp-add-to-cart-decrement' onClick={()=> decrement()}>-</div>
      </div>
      <div className='spp-add-to-cart-button'>Add to Cart</div>
    </div>
  )
}

export default AddtoCart