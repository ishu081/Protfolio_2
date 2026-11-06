import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
      
      <div className="contactinfo">
        <form action="https://formspree.io/f/mdeejjyr">
          <input type="text" name="Username" placeholder='Name'  className='name'/>
          <input type="email" name="Email" placeholder='Email'  className='email'/>
          <textarea name="message" id="text" placeholder='message...'></textarea>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact