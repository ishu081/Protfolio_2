import React from 'react'
import "./ProjectCard.css"

function ProjectCard({title }) {
  return (
    <div className='box'>
        <h1>{title}</h1>
    </div>
  )
}

export default ProjectCard