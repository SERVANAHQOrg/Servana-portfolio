import "../styles/Hero.css";
import skyline from "../assets/Nairobi.png";
import peace from "../assets/peace.svg";

export default function Hero() {
  return (
    <section className="hero-container">
      {/* Skyline with overlaid heading */}
      <div className="hero-skyline">
        <img src={skyline} alt="Nairobi skyline" loading="eager" />
        <h1 className="hero-title">Your Home, Our Care</h1>
      </div>

      {/* Content block with text + image side-by-side */}
      <div className="hero-content">
        <div className="hero-text">
          <p>
            Servana offers more than services—peace and a happy home.
            Experience trusted care tailored to your needs.
          </p>
        </div>
        <div className="hero-image">
          <img src={peace} alt="peace illustration" className="peace-img" />
        </div>
      </div>
    </section>
  );
}
