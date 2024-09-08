
import React from 'react'

import { FaLinkedin, FaTwitter, FaGithub,FaEnvelope} from "react-icons/fa";
function Footer() {
  return (
    <div className='container-fluid p-3 d-flex justify-content-center align-items-center flex-column footer_container ' >
      <h1>Find Me On</h1>
      <div className='list-group list-group-horizontal' style={{ listStyleType: "none" }}>
        <a className='list-group-item' href="https://www.linkedin.com/in/shivam-mishra-8aba7b179/" target="_blank"> <FaLinkedin /></a>
        <a className='list-group-item' href="https://twitter.com/Shivamm3213" target="_blank" ><FaTwitter /></a>
        <a className='list-group-item' href="http://github.com/Shivam367-glitch/" target="_blank" ><FaGithub /></a>
        <a className='list-group-item' href="mailto:txt2shivam@gmail.com" target="_blank" ><FaEnvelope/></a>
      </div>
    </div>
  )
}

export default Footer

