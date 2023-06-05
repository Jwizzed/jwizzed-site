import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact(){
    const form = useRef();


    function sendMail(e) {
        e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        }

    return <section id="contact">

    </section>
}

export default Contact;