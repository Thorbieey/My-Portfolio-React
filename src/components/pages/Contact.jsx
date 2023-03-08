import React from 'react';
import {IoMailOutline, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import "../css/contact.css";
<ion-icon name="logo-linkedin"></ion-icon>

function Contact(props) {
  return (
    <div className="row contact-container">
      <h1 className="page-header">Contact Me</h1>
      <p className="contact-texts col-lg-10">
        Got any additional questions/enquiries? Kindly reach out via:
      </p>
      <ul className="contact-list col-lg-9">
        <li className="contact-item">
        Email <IoMailOutline /> : <a className="contact-link" href="https://tobiolajide223@gmail.com" target="_blank" rel="noreferrer">tobiolajide223@gmail.com</a>
        </li>
        <li className="contact-item">
        LinkedIn <IoLogoLinkedin />  : <a className="contact-link" href="https://linkedin.com/in/tobi-olajide" target="_blank" rel="noreferrer">www.linkedin.com/in/tobi-olajide</a>
        </li>
        <li className="contact-item">
        GitHub <IoLogoGithub /> : <a className="contact-link" href="https://github.com/Thorbieey" target="_blank" rel="noreferrer">Thorbieey</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
