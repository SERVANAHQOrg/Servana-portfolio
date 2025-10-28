import { useNavigate } from "react-router-dom";
import "../styles/AboutIntro.css";
import aboutIcon from "../assets/story.svg";
import leftImg from "../assets/riba.svg";
import rightImg from "../assets/vako.svg";

export default function AboutIntro() {
  const navigate = useNavigate();

  return (
    <section className="about-intro-section" id="about-intro">
      {/* Left image */}
      <div className="about-side" data-aos="fade-right">
        <img
          src={leftImg}
          alt="Home cleaning illustration"
          className="about-side-img-l"
        />
      </div>

      {/* Center content */}
      <div className="about-intro" data-aos="fade-up" data-aos-duration="1000">
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
    Our story is not about services — it’s about people. Every booking made
    through Servana represents someone’s trust, someone’s comfort, and
    someone’s peace of mind. Whether it’s a mother looking for a reliable
    babysitter, a young professional needing help to fix a sink, or an elderly
    couple seeking a gentle hand around the house — Servana steps in with heart.
  </p>
</div>


        <button className="meet-servana-btn" onClick={() => navigate("/about")}>
          Meet Servana
        </button>
      </div>

      {/* Right image */}
      <div className="about-side" data-aos="fade-left">
        <img
          src={rightImg}
          alt="Repair illustration"
          className="about-side-img-r"
        />
      </div>
    </section>
  );
}
