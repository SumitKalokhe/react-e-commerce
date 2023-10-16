import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { ProductPage } from '../../productpage/ProductPage'
import './home.css'

const Home = () => {

  const {products}= useContext(AppContext)
  
  // console.log(products)
  
  return (
    <div className='product-page max-width'>{products.map((items)=>{
      return <ProductPage key={items.id} {...items}/>
    })}</div>
  )
}

export default Home