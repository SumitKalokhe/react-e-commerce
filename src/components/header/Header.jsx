import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
    return (
        <>
            <NavLink to='/' className='header-brand max-width'>
                <div className='header-brand-name'>ElectroniX</div>
            </NavLink>
        </>
    )
}
