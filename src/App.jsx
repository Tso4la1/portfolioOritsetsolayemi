import React from "react";
import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/Header";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Price } from "./Components/Price";
import { Footer } from "./Components/Footer";


function App() {

  return (
    <div>
      <NavBar />
      <Header />
      <Portfolio />
      <About />
      <Services />
      <Price />
      <Footer />
    </div>
  )
}

export default App
