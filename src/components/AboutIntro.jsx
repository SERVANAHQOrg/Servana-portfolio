import { useNavigate } from "react-router-dom";
import "../styles/AboutIntro.css";
import aboutIcon from "../assets/story.svg"; // small flat icon/illustration

export default function AboutIntro() {
  const navigate = useNavigate();

  return (
    <section className="about-intro">
      <h2 className="intro-title">Our Story</h2>
      <img src={aboutIcon} alt="Servana icon" className="intro-illustration" />

      <div className="intro-text">
        <p>
          Servana began with a simple mission: make home services seamless and
          trustworthy for every family.
        </p>
        <p>
          From cleaning to repairs, we connect households with vetted,
          professional service providers.
        </p>
        <p>
          Built in Nairobi, we’re expanding across Kenya with a focus on
          community and reliability.
        </p>
      </div>

      <button className="meet-servana-btn" onClick={() => navigate("/about")}>
        Meet Servana
      </button>
    </section>
  );
}
