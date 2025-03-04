import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
function ContactPage() {
    const [resultMsg, setResultMsg] = useState("") 
    const [color, setColor] = useState("") 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_c3ex917', 'template_ro4imsr', form.current, {
          publicKey: 'CKOPi4XGC27LBfg6Q',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setResultMsg("Your Message has been successfully sent!")
            setColor('green')

            setTimeout(() => {
                setResultMsg("")
            }, 5000);
        },
        (error) => {
            console.log('FAILED...', error.text);
            setResultMsg("Your Message has not been sent, try again!")
            setColor('red')

            setTimeout(() => {
                setResultMsg("")
            }, 5000);
        },
        );
        e.target.reset()

    };

  return (
    <section className="contPage" id='contact'>
        <p className="paraContact">get in touch</p>
        <h1 className="headerContact">Contact</h1>
        <div className="main">
            <div className="ways">
                <div className="way">
                    <i className="fa-solid fa-phone"></i>
                    <h4>+20 1020453180</h4>
                </div>
                <div className="way">
                    <i className="fa-solid fa-envelope"></i>
                    <h4>muuhammad.said <br /> @gmail.com</h4>
                </div>
                <div className="way">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>Egypt</h4>
                </div>

            </div>
            <div className="break"></div>
            <form action="" ref={form} onSubmit={sendEmail}>
                <label htmlFor="Name">Your Name</label>
                <input type="text" name='name' required id='Name' />
                <label htmlFor="Email">Your Email</label>
                <input type="email" name='email' required id='Email' />
                <label htmlFor="area">Your Message</label>
                <textarea name="message" required rows={8} id="area"></textarea>
                <button className="button btnSubmit">send</button>
                <span style={{color: color}}>{resultMsg}</span>
            </form>
        </div>
    </section>
  )
}

export default ContactPage