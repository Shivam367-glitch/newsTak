import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchNews from "./Components/FetchNews"
import Header from "./Components/Navbar";
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <Hero/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/*" element={<FetchNews />} />
        </Routes>
      
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
