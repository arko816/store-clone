import React from 'react'
import "../styles/nav.css"
import {Link} from "react-router-dom"
import {logo} from '../data/data.json'
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
        <a href='/dsd'>
            <img id="logoImage" src='{logo}' alt='Not' />
        </a>
        </div>
        <a className='navLinks' href="https://www.mi.com/in/phone">Mi Phones</a>
        <a className='navLinks' href="https://www.mi.com/in/product-list/redmi">Redmi Phones</a>
        <a className='navLinks' href="https://www.mi.com/in/product-list/tv">TV</a>
        <a className='navLinks' href="https://www.mi.com/in/product-list/laptops">laptops</a>
        <a className='navLinks' href="https://www.mi.com/in/life-style">Lifestyle</a>
        <a className='navLinks' href="/#home">home</a>
        <a className='navLinks' href="/#audio">radio</a>
        <a className='navLinks' href="/#accessories">accessories</a>
        <div className='searchbox'>
            <input type="text" name="search" placeholder="Search" />{searchIcon}
            </div>        
            </div>
  )
}


export default Navbar