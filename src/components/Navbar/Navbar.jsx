import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import menu_icon from '../../assets/images/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img className='logo' src={logo} alt="logo image" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contacts' smooth={true} offset={-260} duration={500} className='btn'>Contacts</Link></li>
      </ul>
      <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar 
