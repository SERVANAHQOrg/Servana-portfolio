import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserCheck,
  FaMoneyBillWave,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const reasons = [
    {
      icon: <FaUserCheck />,
      title: "Verified Workers",
      text: "All service providers are vetted and background-checked.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Pricing",
      text: "Transparent rates with no hidden charges or surprises.",
    },
    {
      icon: <FaUsers />,
      title: "Community-First",
      text: "We hire locally and reinvest in Nairobi neighborhoods.",
    },
    {
      icon: <FaStar />,
      title: "Quality Assurance",
      text: "Continuous feedback ensures top-notch service every time.",
    },
  ];

  return (
    <section id="why-choose-us" className="why-section">
      <h2 className="why-title" data-aos="fade-up">Why Choose Us?</h2>
      <div className="why-cards">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`why-card ${i % 2 ? "alt-bg" : ""}`}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="why-icon">{r.icon}</div>
            <div className="why-info">
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
