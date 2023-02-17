import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
        <ul className="nav__ul">
            <li className='nav__li'><a href="">Home</a></li>
            <li className='nav__li'><a href="">Productos</a></li>
            <li className='nav__li'><a href="">FAQs</a></li>
            <li className='nav__li'><a href="">Contactanos</a></li>
        </ul>
    </nav>
  )
}

export default Navbar