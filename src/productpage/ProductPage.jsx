import React from 'react'
import { NavLink } from 'react-router-dom'
import './product-page.css'

export const ProductPage = ({id,image,name, price, category}) => {
  return (
    <div className='products max-width'>
        <NavLink to={`/singleproduct/${id}`} className='product-card'>
            <div className='product-image-category'>
                <img className='product-image' src={image} alt="" />
                <div className='product-category'>{category}</div>
            </div>
            <div className='product-name-price'>
                <div className='product-name'>{name}</div>
                <div className='product-price'>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits:2}).format(price/100)}</div>
            </div>
        </NavLink>
    </div>
  )
}
