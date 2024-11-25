import React from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import toast from "react-hot-toast";
import { MdOutgoingMail } from "react-icons/md";

function ContactForm() {
    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('aastha90', 'template_duj6lao', form.current, 'cXD5Qt5AoTue799mK')
            .then(() => {
                toast.success("Thank you for reaching out to me!✨")
            }, (error) => {
                toast.error("Oops! There was a problem submitting the form.😢")
            })
    } 

    return (
        <div id='contact' className='contact'>
            <h1>Contact Me</h1>
            <h3>Let's connect!!</h3>
            <div className="contact--grid">
                <form ref={form} onSubmit={handleSubmit} className='contact--form'>
                    <input type="text" name="user_name" placeholder = "Your name" required />
                    <input type="email" name="user_email" placeholder = "Your email" required />
                    <textarea name = "message" placeholder = "Your message here" required />
                    <button>Send</button>
                </form>
                <div className="contact--vertical--line"></div>
                <div className='contact--mail'>
                    <p>
                        Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.            
                    </p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aasthasuman990@gmail.com" target="_blank">
                        <MdOutgoingMail size={40} color='rgb(254, 110, 110)'/>
                        <p>aasthasuman990@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm