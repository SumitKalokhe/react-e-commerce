import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Home = () => {

  const {products}= useContext(AppContext)
  
  console.log(products)
  
  return (
    <div>{products.map((items)=>{
      return <div key={items.id}>{items.name}</div>
    })}</div>
  )
}

export default Home