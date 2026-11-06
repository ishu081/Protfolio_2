
import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from "react-scroll"

function Nav() {
  const menu = useRef(null)
  const mobile = useRef(null)

  const closeMobileMenu = () => {
    mobile.current.classList.remove("activeMobile")
    menu.current.classList.remove("activeHam")
  }

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopMenu">
        <li><Link to="home" smooth duration={500} spy offset={-80}>Home</Link></li>
        <li><Link to="about" smooth duration={500} spy offset={-80}>About</Link></li>
        <li><Link to="project" smooth duration={500} spy offset={-80}>Projects</Link></li>
        <li><Link to="contact" smooth duration={500} spy offset={-80}>Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <div
        className="hamburger"
        ref={menu}
        onClick={() => {
          mobile.current.classList.toggle("activeMobile")
          menu.current.classList.toggle("activeHam")
        }}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className="mobileMenu" ref={mobile}>
        <li><Link to="home" smooth duration={500} spy offset={-80} onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="about" smooth duration={500} spy offset={-80} onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="project" smooth duration={500} spy offset={-80} onClick={closeMobileMenu}>Projects</Link></li>
        <li><Link to="contact" smooth duration={500} spy offset={-80} onClick={closeMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
