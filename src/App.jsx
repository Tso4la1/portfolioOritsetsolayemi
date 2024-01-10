import React from "react";
import { NavBar } from "./Components/NavBar";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Price } from "./Components/Price";
import { Footer } from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="prices" element={<Price />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
