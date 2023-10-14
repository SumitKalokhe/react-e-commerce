import React from 'react'
import { NavLink } from 'react-router-dom'
import './errorpage.css'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>404</h1>
      <h2>uh oh! you got lost</h2>
      <h3>The page you are looking for does not exist</h3>
      <NavLink to='/'>
        <button className='error-home-btn'>Home</button>
      </NavLink>
    </div>
  )
}

export default ErrorPage