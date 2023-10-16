import React from 'react'
import './contact.css'

export const Contact = () => {
  return (
    <div className='max-width contact-section'>
      <h1 className='contact-heading'>Contact us</h1>
      <div className='contact-form'>
        <form className='input-fields' action="mailto:sumitkalokhe1111@gmail.com" method="post" encType="text/plain">

          <input type="text" placeholder='Name' name="Name:" autoComplete='off' required/>

          <input type='email' placeholder='Email' name="Email:" autoComplete='off' required/>

          <textarea name="Message:" placeholder='Message' cols="45" rows="5" autoComplete='off' required></textarea>

          <input type="submit" className='contact-submit-btn' style={{cursor:"pointer"}} />

        </form>
      </div>
    </div>
  )
}
