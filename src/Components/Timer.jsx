import React, { useEffect, useState } from "react";
import { RiCalendar2Fill } from 'react-icons/ri'
const Timer = () => {
 
  const [currentTime, setCurrentTime] = useState(new Date());
     useEffect(() => {
        
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer); 
      }, []);
  return (
      <span className="text-white fw-bolder" ><RiCalendar2Fill size={28} color="#2b2b2b" className="me-2"/>{currentTime.toLocaleTimeString()}</span>
  )
}

export default Timer