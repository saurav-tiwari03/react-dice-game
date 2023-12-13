import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";




export const ViewCode = () => {
  return (
    <div className='mt-12'> 
      <div className='flex items-center justify-center mb-12'>
        <div className='flex items-center text-2xl'>
          Source Code : <span className='ml-4'><a id='icon' className='' target='_blank' rel="noreferrer" href="https://github.com/saurav-tiwari03/react-dice-game"><FaCode/></a></span>
        </div>
      </div>
      <div  className='flex md:flex-row items-center flex-col md:justify-evenly justify-center text-2xl'>
        <span className='flex items-center hover-float mb-2 md:mb-0'>
          Github : <a href="https://github.com/saurav-tiwari03"><FaGithub /></a>
        </span>
        <span className='flex items-center hover-float mb-2 md:mb-0'>
          LinkedIn : <a  href="https://linkedin.com/in/saurav-tiwari03/"><FaLinkedin /></a>
        </span>
        <span className='flex items-center hover-float'>
          Portfolio : <a  href="https://my-portfolio-03.netlify.app/"><SiCodingninjas /></a>
        </span>
      </div>
    </div>
  )
}
