import React from 'react'

import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className='container-fluid p-3 d-flex justify-content-center align-items-center flex-column bg-secondary ' style={{ height: "25vh" }}>
      <h1>Find Me On</h1>
      <div className='list-group list-group-horizontal' style={{ listStyleType: "none" }}>
        <a className='list-group-item' href="https://www.linkedin.com/in/shivam-mishra-8aba7b179/" target="_blank"> <FaLinkedin /></a>
        <a className='list-group-item' href="https://twitter.com/Shivamm3213" target={"_blank"} ><FaTwitter /></a>
        <a className='list-group-item' href="https://www.facebook.com/profile.php?id=100011628730183" target="_blank" ><FaFacebook /></a>
        <a className='list-group-item' href="https://www.instagram.com/txt2shivam/?hl=en" target="_blank" ><FaInstagram /></a>
        <a className='list-group-item' href="https://www.youtube.com/channel/UCv8mLTYO-LiH1yhsh8lnAZg" target="_blank" ><FaYoutube /></a>
      </div>
    </div>
  )
}

export default Footer
