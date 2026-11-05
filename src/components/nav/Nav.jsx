import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"

function Nav() {
  let menu = useRef()
  let mobile = useRef()
  return (
    <nav>
      <h1>PROTFOLIO</h1>

      <ul className='desktopMenu'>
        <Link to='home' activeClass='active' smooth={true} duration={500} spy={true}><li>Home</li></Link>
        <Link to='about' activeClass='active' smooth={true} duration={500} spy={true}><li>About</li></Link>
        <Link to='project' activeClass='active' smooth={true} duration={500} spy={true}><li>Projects</li></Link>
        <Link to='contact' activeClass='active' smooth={true} duration={500} spy={true}><li>Contact</li></Link>
      </ul>

      <div className="hamburger" ref={menu} onClick={() => {
          mobile.current.classList.toggle("activeMobile")
          menu.current.classList.toggle("activeHam")
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className='mobileMenu' ref={mobile}>
        <Link to='home' activeClass='active' smooth={true} duration={500} spy={true}><li>Home</li></Link>
        <Link to='about' activeClass='active' smooth={true} duration={500} spy={true}><li>About</li></Link>
        <Link to='project' activeClass='active' smooth={true} duration={500} spy={true}><li>Projects</li></Link>
        <Link to='contact' activeClass='active' smooth={true} duration={500} spy={true}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav