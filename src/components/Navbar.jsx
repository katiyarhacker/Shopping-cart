import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      
      {/* Left side: Logo */}
      <div className="text-2xl font-bold">
        E-Cart
      </div>

      {/* Center: Links */}
      <div className=" flex gap-6">
        <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
        <NavLink to="/add" className="hover:text-gray-300">addProduct</NavLink>
        <NavLink to="/cart" className="hover:text-gray-300">Cart</NavLink>
      </div>

      {/* Right side: Signup/Login */}
      <div className="flex gap-4">
        <NavLink 
          to="/signup" 
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 cursor-pointer"
        >
          Sign Up
        </NavLink>

        <NavLink 
          to="/login" 
          className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black cursor-pointer"
        >
          Login
        </NavLink>
      </div>

    </nav>
  )
}

export default Navbar;