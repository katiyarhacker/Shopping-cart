import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-200 justify-center">

      <NavLink to="/" 
        className={({isActive}) => isActive ? "text-blue-500 font-bold" : ""}
      >
        Home
      </NavLink>

      <NavLink to="/add" 
        className={({isActive}) => isActive ? "text-blue-500 font-bold" : ""}
      >
        Add Product
      </NavLink>

      <NavLink to="/cart" 
        className={({isActive}) => isActive ? "text-blue-500 font-bold" : ""}
      >
        Cart
      </NavLink>

    </div>
  )
}

export default Navbar