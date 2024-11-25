import React from 'react'
import './Footer.css'
import { SiHackerrank, SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";


function Footer() {
  return (
    <div className='footer'>
      <div className='footer--links'>
       
        <a href="https://www.linkedin.com/in/aastha-suman-64085a1a9/" target="_blank"><SiLinkedin size={40} /></a>
        <a href="https://github.com/mangooes1" target="_blank"><SiGithub size={40} /></a>
        <a href="https://www.hackerrank.com/profile/aasthasuman990" target="_blank"><SiHackerrank size={40} /></a>
      </div>
      <p>Coded with ❤️ by Aastha Suman</p>
    </div>
  )
}

export default Footer