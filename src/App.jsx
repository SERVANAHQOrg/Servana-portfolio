import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactJoin from "./components/ContactJoin";
import Footer from "./components/Footer";
import "./index.css";
import WhyChooseUs from "./components/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Dyk from "./components/Dyk";
import ReferralChallenge from "./pages/ReferralChallenge";
import SubscriptionPage from "./pages/SubscriptionPage";
import CommunityImpact from "./components/CommunityImpact";
import HowItWorks from "./components/HowItWorks";
import AboutIntro from "./components/AboutIntro";
import HomeStory from "./components/HomeStory";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Blog from "./components/Blog";

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
              <HomeStory />
              <Services />
              <HowItWorks/>
              <WhyChooseUs />
              <CommunityImpact/>
              <AboutIntro/>
              <Dyk />
              <Blog />
              <ContactJoin />
            </>
          }
        />
        <Route path="/referral" element={<ReferralChallenge />} />
        <Route path="/subscriptions" element={<SubscriptionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
