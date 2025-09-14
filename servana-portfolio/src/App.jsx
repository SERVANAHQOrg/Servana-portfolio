import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import WhyChooseUs from "./components/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  // always keep hooks at the top
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // conditional return AFTER hooks
  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
