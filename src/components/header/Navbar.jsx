import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { CartContext } from '../context/CartContext'


export const Navbar = () => {

    const {cartItemTotal}= useContext(CartContext)

    const [mobileMenu, setMobileMenu] = useState(false)
    
    return (
        <>
            <div className='max-width'>
                <ul className={mobileMenu ? 'navbar mobile-navbar': 'navbar'}>
                    <li className='navbar-link ' >
                        <NavLink to="/" className="text-dec-none" onClick={()=>setMobileMenu(!mobileMenu)}>Home</NavLink>
                    </li>
                    <li className='navbar-link' >
                        <NavLink to="/about" className="text-dec-none" onClick={()=>setMobileMenu(!mobileMenu)}>About</NavLink>
                    </li>
                    <li className='navbar-link' >
                        <NavLink to="/" className="text-dec-none" onClick={()=>setMobileMenu(!mobileMenu)}>Products</NavLink>
                    </li>
                    <li className='navbar-link' >
                        <NavLink to="/contactus" className="text-dec-none" onClick={()=>setMobileMenu(!mobileMenu)}>Contact Us</NavLink>
                    </li>
                    <li className='navbar-link' >
                        <NavLink to="/cart" className="text-dec-none  shopping-cart" onClick={()=>setMobileMenu(!mobileMenu)}><i className="fi fi-rr-shopping-cart"></i><div className='cart-total'>{cartItemTotal}</div></NavLink>

                    </li>
                </ul>
            </div>
            <div className='hamburger-menu' onClick={()=>setMobileMenu(!mobileMenu)}><i className="fi fi-br-menu-burger"></i></div>

        </>
    )
}
