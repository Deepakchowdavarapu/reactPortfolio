import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="container">
            <h1 className='c1'>Contact</h1>
            <input type="email" placeholder="Enter Your Email" />
            <input type="text" placeholder="Enter Your Name" />
            <textarea placeholder="Enter Your Message"></textarea>
            <input type="tel" placeholder="Enter Your Phone Number" />
            <p>Hi, I am Deepak</p>
            <p><i className="fas fa-envelope" aria-hidden="true"></i>Deepak@gmail.com</p>
            <p><i className="fas fa-phone" aria-hidden="true"></i>1234567890</p>
            <button>Submit</button>
        </div>
    );
}

export default Contact;
