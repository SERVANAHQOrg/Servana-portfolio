import "../styles/Hero.css";
import skyline from "../assets/Nairobii.jpeg";
import logo from "../assets/servanalogo.png"; // ✅ your logo
import peace from "../assets/peace.svg";

export default function Hero() {
  return (
    <section className="hero-container">
      {/* Skyline background */}
      <div className="hero-skyline">
        <img src={skyline} alt="Nairobi skyline" loading="eager" />

        {/* === Overlayed Logo, Name & Tagline === */}
        <div className="hero-overlay">
          <img src={logo} alt="Servana logo" className="hero-logo" />
          <h1 className="hero-name">Servana</h1>
          <p className="hero-tagline">Your Home. Our Care</p>
        </div>
      </div>

      {/* Content below the hero */}
<div className="hero-content">
  <div className="hero-text">
    <p>
      In every home, there's a heartbeat — the quiet rhythm of care that holds everything together.
    </p>
    <p>
      At Servana, we see the unseen heroes of that heartbeat — the women managing homes, the men keeping systems running,
      the caregivers, cleaners, and fixers who ensure every corner of a house feels alive, safe, and peaceful.
    </p>
  </div>
        <div className="hero-image">
          <img src={peace} alt="peace illustration" className="peace-img" />
        </div>
      </div>
    </section>
  );
}
