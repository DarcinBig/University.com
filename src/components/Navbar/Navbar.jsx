import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : '' }`}>
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
