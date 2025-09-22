// Splash.jsx
import { useEffect, useState } from "react";
import "../styles/SplashScreen.css";
import logo from "../assets/logo.jpeg";

export default function Splash({ onFinish }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      onFinish?.();
    }, 3000); // 3-second animation
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash ${done ? "fade-out" : ""}`}>
      <img src={logo} className="logo-animate" alt="Servana Logo" />
      <p className="tagline">Built On Trust.
Growing With Communities.</p>
    </div>
  );
}
