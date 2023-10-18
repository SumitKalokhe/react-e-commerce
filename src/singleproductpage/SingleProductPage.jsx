import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../components/context/AppContext'


const API = 'https://api.pujakaitem.com/api/products'
export const SingleProductPage = () => {

  const {getSingleProduct, singleProduct}= useContext(AppContext)
  const { id } = useParams();
  // console.log(singleProduct)
  

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  },[id])

  return (
    <div className='single-product-page'>
      <div>{singleProduct.name}</div>
    </div>
  )
}
