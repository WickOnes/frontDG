import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <ul className='nav'>
        <li>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/Authlet'}>Authlet</NavLink>
        </li>
    </ul>
  )
}
