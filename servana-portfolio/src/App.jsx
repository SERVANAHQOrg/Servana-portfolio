import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ReferralPromo from "./components/ReferralPromo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  // ✅ Define the referral page right here
  const ReferralPage = () => (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <Navbar />
      <h1>Referral Program</h1>
      <p>Invite friends and earn rewards for every successful referral.</p>
      <Footer />
    </section>
  );

  // ✅ Define the home page layout right here
  const Home = () => (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <ReferralPromo />
      <Contact />
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/referral" element={<ReferralPage />} /> */}
    </Routes>
  );
}

export default App;
