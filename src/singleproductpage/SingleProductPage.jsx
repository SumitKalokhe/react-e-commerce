import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../components/context/AppContext'
import './singleproductpage.css'

const API = 'https://api.pujakaitem.com/api/products'

export const SingleProductPage = () => {
  const { getSingleProduct, singleProduct } = useContext(AppContext)
  const { id } = useParams();

  const productImage = singleProduct && singleProduct.image ? singleProduct.image.find(item => item.id === "randomid1") : null;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [id])

  return (
    <div className='single-product-page'>
      <div className='single-product-image-div'>
        {productImage && <img className="single-product-image" src={productImage.url} alt="" />}
      </div>
      <h1 className='single-product-name'>{singleProduct && singleProduct.name}</h1>
      <p className='single-product-price'>MRP: {singleProduct && Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(singleProduct.price / 100)}</p>
      <p className='single-product-description'>{singleProduct && singleProduct.description}</p>
      <p className='single-product-availability'>Available: {singleProduct && (singleProduct.stock > 0 ? "In Stock" : "Out of Stock")}</p>
      <p>ID: {singleProduct&& singleProduct.id}</p>
      <p>Brand: {singleProduct&& singleProduct.company}</p>
    </div>
  )
}
