import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img className='logo' src={logo} alt="logo image" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contacts</button></li>
        </ul>
    </nav>
  )
}

export default Navbar 
