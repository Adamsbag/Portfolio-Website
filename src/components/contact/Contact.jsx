import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adamsbag84@gmail.com</h5>
            <a href="mailto:adamsbag84@gmail.com" target='_blank'>Send me a message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Adama Bagayoko</h5>
            <a href="https://m.me/AdamsBag" target='_blank'>Contact me on Messenger</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon-whatsapp'/>
            <h4>WhatsApp</h4>
            <h5>+1 443-813-5676</h5>
            <a href="https://api.whatsapp.com/send?phone=14438135676"target='_blank'>Contact me on WhatsApp</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact