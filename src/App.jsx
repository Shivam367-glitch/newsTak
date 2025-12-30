
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchNews from "./Components/layout/FetchNews"
import Header from "./Components/layout/Navbar";
import Footer from './Components/layout/Footer';
import Hero from './Components/common/Hero';
import ScrollToTop from './Components/common/ScrollToTop';


function App() {

  return (
     <>
      <BrowserRouter>
        <Header /> 
        <Hero/>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/*" element={<FetchNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </>
  )
}

export default App
