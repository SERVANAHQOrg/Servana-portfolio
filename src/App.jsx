import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReferralChallenge from "./pages/ReferralChallenge";
import SubscriptionPage from "./pages/SubscriptionPage";
import AboutIntro from "./components/AboutIntro";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import BlogDetail from "./components/BlogDetail";
import ServanaExperience from "./components/ServanaExperience";
import TrustImpactUnified from "./components/TrustImpactUnified";

function App() {
  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServanaExperience />
              <Services />
              <TrustImpactUnified/>
              <AboutIntro/>
            </>
          }
        />
        <Route path="/referral" element={<ReferralChallenge />} />
        <Route path="/subscriptions" element={<SubscriptionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/blog" element={<ServanaExperience />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/featured" element={<BlogDetail />} />
      </Routes>
      <Footer  open={contactOpen} setOpen={setContactOpen}  />
    </>
  );
}

export default App;