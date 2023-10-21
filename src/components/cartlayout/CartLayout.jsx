import React from 'react'
import './cart-layout.css'

const CartLayout = ({item}) => {

    const { id,name,price,quantity, singleProduct} = item

    const image=singleProduct.image[0].url;
    const newPrice=Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(price / 100)

  return (
    <div className='cart-layout'>
        <div className='sp-cart-layout'>
            <div className='cart-product-name'><div className='cart-product-image-div'><img className='cart-product-image' src={image} alt="" /></div>{name}</div>
            <div className='cart-product-quantity'>{quantity}</div>
            <div className='cart-product-price'>{newPrice}</div>
        </div>
    </div>
  )
}

export default CartLayout