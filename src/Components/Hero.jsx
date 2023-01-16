import React from 'react'

function Hero() {
  console.log("hero")
  return (
    <div className='container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center' style={{height:'50vh'}}>
  <h1>News Tak</h1>
  <h5>It is News website where you can read news with available categories.</h5>
    </div>
  )
}

export default Hero

