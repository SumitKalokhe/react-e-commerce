import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { AppContext } from '../context/AppContext'

export const Header = () => {
    const value = useContext(AppContext)
    return (
        <>
            <NavLink to='/' className='header-brand max-width'>
                <div className='header-brand-name'>{value} ElectroniX</div>
            </NavLink>
        </>
    )
}
