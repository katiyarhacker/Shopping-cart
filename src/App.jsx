import { useState } from 'react'

import './App.css'
import AddCart from './components/AddCart'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div>


      <Routes>
        <Route path="/" element={
          <div>
          <Navbar/>
          <Home />
          </div>
          } />
        <Route path="/add" element={<div>
          <Navbar/>
          <AddCart />
        </div>} />
        <Route path="/cart" element={<div>
           <Navbar/>
          <Cart />
        </div>} />
      </Routes>

     </div> 
  )
}

export default App
