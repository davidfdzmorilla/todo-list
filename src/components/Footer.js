import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './Footer.css'


export const Footer = () => {
  return (
    <footer>
      <a href="https://davidfdzmorilla.dev" target='_blank' rel="nopener noreferrer" className="myName">davidfdzmorilla.dev</a>
      <div></div>
      <div className="links-logos-container">
        <a href="https://www.linkedin.com/in/davidfdzmorilla/" target='_blank' rel="nopener noreferrer"><FaLinkedin className="rss-logo" /></a>
        <a href="https://github.com/davidfdzmorilla" target='_blank' rel="nopener noreferrer"><FaGithub className="rss-logo" /></a>
      </div>
    </footer>
  )
}
