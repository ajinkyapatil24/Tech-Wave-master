import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <p>© TechWave Academy</p>
      {/* <p><IoCall /> :  +91 7848759645</p> */}
      <p className='footer-icons'>

      <FaFacebook />
      <FaSquareInstagram />
      <FaTwitter />
      <FaLinkedin />
      </p>
    </footer>
  )
}

export default Footer
