import React, { useContext } from 'react'
import { CartContext } from './components/context/CartContext'
import CartLayout from './components/cartlayout/CartLayout';
import './cart.css'

export const Cart = () => {



  const { cart, shipping_fee, total_price } = useContext(CartContext)

  const totalPrice=Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(total_price/ 100) 
  
  const shippingfee=Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(shipping_fee*100 / 100) 

  const orderTotal=Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(shipping_fee+ total_price / 100)

  if (cart.length === 0) {
    return <div style={{ width: "100%", margin: "5rem 0", textAlign: "center" }}>No items in cart</div>
  } else return (
    <>
      <div className='cart-table cart-layout-main'>
        <div className='cart-layout'>
          <div className='sp-cart-layout'>
            <div className='cart-table-name cart-product-name'>
              <div>Name</div>
            </div>
            <div className='cart-table-quantity'>Quantity</div>
            <div className='cart-table-price cart-product-price'>Price</div>
            <div className='cart-table-remove '>Remove</div>
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
      <div className='final-price'>
        <div className='subtotal'>Subtotal: <p>{totalPrice}</p></div>
        <div className='shipping-fee'>Shipping Fees: <p>{shippingfee}</p></div>
        <div className='order-total-price'>Order Total: <p>{orderTotal}</p></div>
      </div>
    </>
  )
}
