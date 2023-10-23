import React, { useContext, useState } from 'react'
import './cart-layout.css'
import { CartContext } from '../context/CartContext'

const CartLayout = ({ item }) => {

    const { id, name, price, quantity, singleProduct } = item

    // const [newQuantity, setNewQuantity] = useState(quantity)

    const { removeCartItem, cartQuantityIncrement, cartQuantityDecrement } = useContext(CartContext)

    const image = (singleProduct && singleProduct.image[0].url);

    const newPrice = Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(quantity * price / 100)

    return (
        <div className='cart-layout'>
            <div className='sp-cart-layout'>
                <div className='cart-product-name'><div className='cart-product-image-div'><img className='cart-product-image' src={image} alt="" /></div>{name}</div>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ cursor: "pointer", fontSize: "1rem", width: "1rem", border:"1.5px solid rgb(250, 228, 228)", borderRadius:"2px" }} onClick={() => cartQuantityIncrement(id)}>+</div>
                    <div className='cart-product-quantity'>{quantity}</div>  {/* add quantity increment decremnt buttons */}
                    <div style={{ cursor: "pointer", fontSize: "1rem", width: "1rem", border:"1.5px solid rgb(250, 228, 228)", borderRadius:"2px" }} onClick={() => cartQuantityDecrement(id)}>-</div>
                </div>
                <div className='cart-product-price'>{newPrice}</div>
                <div className='cart-product-remove' onClick={() => removeCartItem(id)}><i className="fi fi-rr-trash"></i></div>
            </div>
            
        </div>
    )
}

export default CartLayout