import React from 'react'
import Hero from '../Components/Hero'
import FetchNews from '../Components/FetchNews'
function Home() {
  console.log("home")
  return (
    <div >
   <Hero/>
   <FetchNews/>
    </div>
  )
}

export default React.memo(Home)
