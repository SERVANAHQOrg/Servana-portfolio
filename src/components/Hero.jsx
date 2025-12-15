import "../styles/Hero.css";
import skyline from "../assets/Nairobii.jpeg";
import logo from "../assets/servanalogo.png";

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

    </section>
  );
}
