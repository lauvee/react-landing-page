import React from "react";
import Presentation from "./components/Presentation";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Presentation />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
