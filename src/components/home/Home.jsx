import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"

function Home() {
  return (
    <div id='home'>
      <div id='leftHome'>
        I'M 
      <h1>ISHIKA SHRESTHA</h1>
      <span>DEVELOPER</span>
      </div>
      <div id='rightHome'>
        <img src={man} alt="Image not found"  className='image'/>
      </div>
    </div>
  )
}

export default Home