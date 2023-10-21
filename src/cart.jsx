import React, { useContext } from 'react'
import { CartContext } from './components/context/CartContext'
import CartLayout from './components/cartlayout/CartLayout';
import './cart.css'

export const Cart = () => {

  const { cart } = useContext(CartContext)

  console.log(cart);

  return (
    <>
      <div className='cart-table cart-layout-main' style={{marginTop: "3rem", fontSize:"1rem"}}>
        <div className='cart-layout'>
          <div className='sp-cart-layout'>
            <div className='cart-table-name cart-product-name'>
              <div>Name</div>
            </div>
            <div className='cart-table-quantity cart-product-quantity'>Quantity</div>
            <div className='cart-table-price cart-product-price'>Price</div>
          </div>
        </div>

      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1rem auto" }}>
        {cart.map((items) => {
          return (
            <div className="cart-layout-main" key={items.id}>
              <CartLayout item={items} />
            </div>
          );
        })}
      </div>
    </>
  )
}
