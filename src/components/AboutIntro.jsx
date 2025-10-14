import { useNavigate } from "react-router-dom";
import "../styles/AboutIntro.css";
import aboutIcon from "../assets/story.svg";

export default function AboutIntro() {
  const navigate = useNavigate();

  return (
    <section className="about-intro" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="intro-title">Our Story</h2>

      <div className="intro-illustration-wrapper">
        <img
          src={aboutIcon}
          alt="Servana illustration"
          className="intro-illustration"
        />
      </div>

      <div className="intro-text">
        <p>
          Servana began with a simple mission — to make home services seamless,
          reliable, and trustworthy for every family.
        </p>
        <p>
          From cleaning to beauty, repairs, and beyond, we connect households
          with vetted professionals who deliver quality and care — right at
          their doorstep.
        </p>
        <p>
          Born in Nairobi, we’re growing across Kenya, powered by community,
          technology, and a deep belief that trust builds better homes.
        </p>
      </div>

      <button
        className="meet-servana-btn"
        onClick={() => navigate("/about")}
      >
        Meet Servana
      </button>
    </section>
  );
}
