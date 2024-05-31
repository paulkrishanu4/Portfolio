import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm('service_i303du1', 'template_e4m8mlw', form.current, {
        publicKey: 'KHzw_Nc8f_N5PJlib',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div style={{marginTop:"200px",marginBottom:"100px"}}>
    <div style={{textAlign: 'center',margin:"40px"}}>
    <a style={{color:"white",fontSize:"35px",background:"blueviolet",padding:"10px",borderRadius:"10px"}}>Let's Connect</a>
    </div>
    <div className="contact">
      
      <div className="c-left">
        <img src="connect.jpg"></img>
      </div>
      <div className="c-rigth">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
    </div>
    </div>
  )
}
