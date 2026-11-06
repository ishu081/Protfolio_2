import React from 'react'
import Nav from './components/nav/Nav'
import {Outlet} from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
      <Nav />
      <Home/>
      <About/> 
      <Project />
      <Contact />
    </div>
  )
}

export default App