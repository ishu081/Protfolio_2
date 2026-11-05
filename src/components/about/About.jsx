import React from 'react'
import "./About.css"
import Card from '../card/Card'
import html from"../../assets/html.webp"
import css from "../../assets/css.webp";
import js from "../../assets/js.webp";
import react from "../../assets/react.webp";
import nodejs from "../../assets/nodejs.webp";
import nextjs from "../../assets/nextjs.webp";
import github from "../../assets/github.webp";

function About() {
  return (
    <div className='about'>
      <div className="left">

        <div className="circleLine">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="details">
          <div className='personalInfo'>
            <h1>Personal Info</h1>
              <ul>
                <li><span>NAME</span>: ISHIKA SHRESTHA</li>
                <li><span>AGE</span>: 21</li>
                <li><span>GENDER</span>: FEMALE</li>
                <li><span>LANGUAGE KNOWN</span>: NEPALI, ENGLISH, KOREAN</li>
              </ul>
          </div>
       
          <div className='education'>
              <h1>Education Info</h1>
                <ul>
                  <li><span>DEGREE</span>: BACHLORE IN COMPUTER ENGINEERING</li>
                  <li><span>BRANCH</span>: COMPUTER ENGINEERING</li>
                  <li><span>CGPA</span>: 3</li>
                  
                </ul>
          </div>
           <div className='skill'>
              <h1>Skills</h1>
                <ul>
                  <li>FULL STACK WEB DEVELOPER</li>
                  <li>DSA</li>
                  <li>DATABASE</li>
                  
                </ul>
          </div>
        </div>
        
      </div>

      
      <div className="right">
        <Card title= "HTML" image={html} />
        <Card title= "CSS" image={css} />
        <Card title="JAVA SCRIPT" image={js} />
        <Card title="REACT" image={react} />
        <Card title="NODEJS" image={nodejs} />
        <Card title="NEXTJS" image={nextjs} />
        <Card title="GITHUB" image={github} />
      </div>
        
    </div>
  )
}

export default About