import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchNews from "./Components/FetchNews"
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/business" element={<FetchNews cate="Business" />} />
          <Route path="/sports" element={<FetchNews cate="Sports" />} />
          <Route path="/technology" element={<FetchNews cate="Technology" />} />
          <Route path="/entertainment" element={<FetchNews cate="Entertainment" />} />
          <Route path="/science" element={<FetchNews cate="Science" />} />
          <Route path="/life-style" element={<FetchNews cate="Lifestyle" />} />
          <Route path="/politics" element={<FetchNews cate="Politics" />} />
          <Route path="/world" element={<FetchNews cate="World" />} />
        </Routes>
      
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchNews from "./Components/FetchNews"
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<FetchNews cate="general" />} />
          <Route path="/business" element={<FetchNews cate="business" />} />
          <Route path="/sports" element={<FetchNews cate="sports" />} />
          <Route path="/technology" element={<FetchNews cate="technology" />} />
          <Route path="/entertainment" element={<FetchNews cate="entertainment" />} />
          <Route path="/science" element={<FetchNews cate="science" />} />
          <Route path="/health" element={<FetchNews cate="health" />} />
        </Routes>
      
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
