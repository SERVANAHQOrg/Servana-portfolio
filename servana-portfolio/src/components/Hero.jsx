import familyImg from "../assets/family.jpg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="brochure-hero">
      {/* Yellow edge half-circles */}
      <div className="accent-circle left" aria-hidden />
      <div className="accent-circle right" aria-hidden />

      {/* Dark background arcs (smaller than the main image) */}
      <div className="rings" aria-hidden>
        <div className="ring ring-1" />
        <div className="ring ring-2" />
      </div>

      {/* Main circular image (slightly bigger than arcs) */}
      <div className="hero-circle">
        <img src={familyImg} alt="Family" loading="lazy"/>
        <div className="headline" data-aos="fade-up">
          <h1><i class="fa-solid fa-leaf"></i>SERVANA</h1>
        </div>
      </div>
    </section>
  );
}
