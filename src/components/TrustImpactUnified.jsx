import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserCheck,
  FaMoneyBillWave,
  FaUsers,
  FaStar,
} from "react-icons/fa";

import "../styles/TrustUnified.css";

import estate1 from "../assets/estate.jpeg";
import estate2 from "../assets/estate2.jpeg";
import estate3 from "../assets/estate3.jpeg";
import referralImg from "../assets/referral.png";

const images = [estate1, estate2, estate3];

const testimonials = [
  {
    text: "Servana keeps our estate spotless and reliable every week!",
    name: "Grace – Nyayo Estate",
  },
  {
    text: "Professional and friendly staff. Highly recommend.",
    name: "Peter – South B",
  },
  {
    text: "Booking services is super easy and always on time.",
    name: "Aisha – Kilimani",
  },
];

export default function TrustImpactUnified() {
  const [index, setIndex] = useState(0); // testimonial index
  const [imgIndex, setImgIndex] = useState(0); // estate image index
  const [fadeKey, setFadeKey] = useState(0); // triggers fade animation
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  // Estate image autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial autoplay – includes fadeKey trigger
  useEffect(() => {
    const t = setInterval(() => {
      setFadeKey((k) => k + 1); // trigger fade
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(t);
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
    <section className="trust-new">
      <h2 className="trust-new-title" data-aos="fade-up">
        Why Nairobi Trusts Servana
      </h2>

      {/* TOP GRID */}
      <div className="trust-new-grid" data-aos="fade-up">
        {/* LEFT */}
        <div className="trust-new-left">
          {reasons.map((r, i) => (
            <div
              className="trust-new-card"
              key={i}
              data-aos="fade-right"
              data-aos-delay={i * 100}
            >
              <div className="trust-new-icon">{r.icon}</div>
              <div className="trust-new-card-body">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div
          className="trust-new-referral-img"
          data-aos="zoom-in"
          data-aos-delay={120}
        >
          <img src={referralImg} alt="Referral" />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="trust-new-referral-content"
          data-aos="fade-left"
          data-aos-delay={150}
        >
          <h3>Did you know …</h3>
          <p className="trust-new-referral-copy">
            Servana runs a <strong>Referral Challenge</strong> where you can
            invite friends, earn rewards, and even unlock VIP perks.
          </p>
          <button
            className="trust-new-btn"
            onClick={() => navigate("/referral")}
            aria-label="Learn more about referral"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="trust-new-bottom" data-aos="fade-up" data-aos-delay={200}>
        {/* IMAGE SLIDER */}
        <div className="trust-new-photo">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`estate ${i}`}
              className={`trust-photo-slide ${i === imgIndex ? "active" : ""}`}
            />
          ))}
        </div>

        {/* FADE-IN TESTIMONIAL */}
        <div className="trust-new-quote-wrap" aria-live="polite">
          <div key={fadeKey} className="testimonial-fade-wrapper">
            <p className="trust-new-quote">“{testimonials[index].text}”</p>
            <p className="trust-new-author">— {testimonials[index].name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
