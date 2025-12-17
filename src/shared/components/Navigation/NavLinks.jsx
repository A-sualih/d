import React from 'react'
import './NavLinks.css'
import { NavLink } from 'react-router-dom'
const NavLinks = () => {
  return (
    <div>
      <ul className='nav-links'>
        <li>
            <NavLink to='/' exact> ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to='/ui/places'>MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'> ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to='/auth'> AUTHENTICATE</NavLink>
        </li>
  
      </ul>
    </div>
  )
}

export default NavLinks
