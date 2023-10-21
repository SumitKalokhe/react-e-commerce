import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { ProductPage } from '../../productpage/ProductPage'
import './home.css'
import CategoryFilter from '../categoryfilter/CategoryFilter'

const Home = () => {

  const { products } = useContext(AppContext)


  return (
    <div className='home-page-layout'>
      <div className='home-category-filter'>
        <h4>Filters</h4>
        <CategoryFilter />
      </div>
      <div className='product-page max-width'>{products.map((items) => {
        return <ProductPage key={items.id} {...items} />
      })}</div>
    </div>
  )
}

export default Home