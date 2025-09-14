import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import Dyk from "./components/Dyk";
import ReferralChallenge from "./pages/ReferralChallenge";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <About />
              <Services />
              <Dyk />
              <Contact />
            </>
          }
        />
        <Route path="/referral" element={<ReferralChallenge />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
