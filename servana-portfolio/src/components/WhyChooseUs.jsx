import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import smileImg from "../assets/smile.jpg";
import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // smooth animation
  }, []);

  return (
    <section id="why-choose-us" className="why-section">
      {/* Left side image */}
      <div className="why-image" data-aos="fade-right">
        <img src={smileImg} alt="Why Choose Us" />
      </div>

      {/* Right side text */}
      <div className="why-container">
        <div className="why-text" data-aos="fade-left">
          <h2>Why Choose Us?</h2>
          <span className="tagline" data-aos="zoom-in">Trusted by Thousands</span>
          <p data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed at ipsum vitae lacus lobortis lacinia. Donec tristique
            arcu massa, at pharetra tortor feugiat non.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed at ipsum vitae lacus lobortis lacinia. Donec tristique
            arcu massa, at pharetra tortor feugiat non.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
