import React, { useContext, useState } from 'react'
import './cart-layout.css'
import { CartContext } from '../context/CartContext'

const CartLayout = ({ item }) => {

    const { id, name, price, quantity, singleProduct } = item

    const [newQuantity, setNewQuantity] = useState(quantity)

    const {removeCartItem}=useContext(CartContext)

    const image = (singleProduct && singleProduct.image[0].url);

    const cartQuantityIncrement = () => {
        if (newQuantity < singleProduct.stock) {
            setNewQuantity(newQuantity + 1)
        }
    }
    const cartQuantityDecrement = () => {
        if (newQuantity > 1) {
            setNewQuantity(newQuantity - 1)
        }
    }

    // const removeCartItem=()=>{
    //     console.log(id, name);
    // }

    const newPrice = Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(newQuantity * price / 100)

    return (
        <div className='cart-layout'>
            <div className='sp-cart-layout'>
                <div className='cart-product-name'><div className='cart-product-image-div'><img className='cart-product-image' src={image} alt="" /></div>{name}</div>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ cursor: "pointer", fontSize: "1rem", width: "1rem" }} onClick={cartQuantityIncrement}>+</div>
                    <div className='cart-product-quantity'>{newQuantity}</div>  {/* add quantity increment decremnt buttons */}
                    <div style={{ cursor: "pointer", fontSize: "1rem", width: "1rem" }} onClick={cartQuantityDecrement}>-</div>
                </div>
                <div className='cart-product-price'>{newPrice}</div>
                <div className='cart-product-remove' onClick={()=>removeCartItem(id)}><i className="fi fi-rr-trash"></i></div>
            </div>
        </div>
    )
}

export default CartLayout