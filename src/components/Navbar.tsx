import React from 'react'
import { useProductListContext } from '../context/ProductList'
import './Navbar.scss'
import Logo from '../assets/logo.jpg'

export default function Navbar() {

  const {searchValue} = useProductListContext()

  return (
    <nav className='navbar'>
      <div className='container'>
      <div className="logo">
        <img src={Logo} alt="XXXLutz" />
      </div>
      <div className='search-container'>
        <input type='text' name='search' value={searchValue} />
      </div>
      </div>
    </nav>
  )
}