import React, { useContext } from 'react'
import './category-filter.css'
import { AppContext } from '../context/AppContext'

const CategoryFilter = () => {

  const { filter, setFilter } = useContext(AppContext)

  const putFilter = (categoryFilter) => {

    setFilter(categoryFilter)

    return
  }

  return (
    <>
      <div className='category-filter'>
        <div onClick={() => putFilter("all")}>All</div>
        <div onClick={() => putFilter("mobile")}>Mobile</div>
        <div onClick={() => putFilter("laptop")}>Laptop</div>
        <div onClick={() => putFilter("computer")}>Computer</div>
        <div onClick={() => putFilter("accessories")}>Accessories</div>
        <div onClick={() => putFilter("watch")}>Watch</div>
      </div>
      
    </>
  )
}

export default CategoryFilter