
import React from 'react'
import Spin from "./Spin.gif"
function Spinner() {
  return (
    <div className='text-center col-12 mt-2'  style={{ minHeight: '100vh' }}>
     <img src={Spin} alt="loading"/>
    </div>
  )
}

export default Spinner
