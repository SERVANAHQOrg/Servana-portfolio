// Splash.jsx
import { useEffect, useState } from "react";
import "../styles/SplashScreen.css";
import logo from "../assets/servanalogo.png";

export default function Splash({ onFinish }) {
  const greetings = [
"• Hello",
"• Sasa",
"• Jambo",
"• Oyaa",
"• Nǐ hǎo",
"• Bonjour",
"• Habari",
"• Wagwan",
  ];

  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const rotation = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 400);

    const finishTimer = setTimeout(() => {
      setDone(true);
      onFinish?.();
    }, 2900);

    return () => {
      clearInterval(rotation);
      clearTimeout(finishTimer);
    };
  }, [onFinish, greetings.length]);

  return (
    <div className={`splash ${done ? "fade-out" : ""}`}>
      <div className="uso">
              <img src={logo} className="logo-animate" alt="Servana Logo" />
      <p key={index} className="hello-text">
        {greetings[index]}
      </p>
      </div>

    </div>
  );
}
