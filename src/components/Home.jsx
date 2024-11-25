import React, { useEffect } from 'react'
import './Home.css'
import TypeWriter from './TypeWriter';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div id='home' className='home'>
      <h1>Hi,</h1>
      <h1>I'm <span>Aastha Suman</span></h1>
      <h2><TypeWriter /></h2>
      <p>Enthusiastic Software Engineer, fascinated by technology, fuelled by the desire to build creative applications</p>
      <Link to="about" smooth={true} offset={-120} >
        <button className='home--button'>Dive In</button>
      </Link>
    </div>
  )
}

export default Home