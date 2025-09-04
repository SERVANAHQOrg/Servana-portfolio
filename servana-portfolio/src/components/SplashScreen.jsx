import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/servana-logo.jpeg";
import "../styles/SplashScreen.css";

function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Call onFinish after animation ends
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <motion.img
        src={logo}
        alt="Servana Logo"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 2 }}
        className="splash-logo"
      />
    </div>
  );
}

export default SplashScreen;
