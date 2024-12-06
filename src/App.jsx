import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import './index.css';
import './App.css';
import Contact from "./components/Contact";
import Impact from "./components/Impact";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
