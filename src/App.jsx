import React from 'react'
import Nav from './components/nav/Nav'
import {Outlet} from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'

function App() {
  return (
    <div>
      <Nav />
      <Home/>
      <About/> 
    </div>
  )
}

export default App