import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

/* Images */
import WorkerImg1 from "../assets/wrk.png";
import CustomerImg1 from "../assets/fam.png";
import Gallery1 from "../assets/iron.png";
import Gallery2 from "../assets/serve.jpeg";
import Gallery3 from "../assets/cli.jpeg";
import TipImg from "../assets/bulb.gif";
import CleanerImg from "../assets/choose.svg";
import MaintainImg from "../assets/clean.svg";
import CustomerImg3 from "../assets/familyy.jpg";

import "../styles/ServanaExperience.css";

const customerImages = [CustomerImg1, Gallery1, CustomerImg3];
const workerImages = [WorkerImg1, Gallery3, Gallery2];

export default function ServanaExperience() {
  const navigate = useNavigate();
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 650, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % 3);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const handleComingSoon = () => {
    toast.info("Coming soon!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  const articles = [
    {
      id: 1,
      image: CleanerImg,
      title: "How to Hire a House Cleaner",
      summary:
        "Find the right house cleaning service that fits your needs and schedule perfectly.",
    },
    {
      id: 2,
      image: MaintainImg,
      title: "Seasonal Home Maintenance Checklist",
      summary:
        "A checklist to help you prepare your home for the changing seasons.",
    },
    {
      id: 3,
      image: TipImg,
      title: "Simple Tips for a Stress-Free Cleaning Routine",
      summary:
        "Discover easy habits to maintain a clean home without spending all weekend cleaning.",
    },
  ];

  const [customerIndex, setCustomerIndex] = useState(0);
  const [workerIndex, setWorkerIndex] = useState(0);

  useEffect(() => {
    const customerInterval = setInterval(
      () => setCustomerIndex((prev) => (prev + 1) % customerImages.length),
      4000
    );

    const workerInterval = setInterval(
      () => setWorkerIndex((prev) => (prev + 1) % workerImages.length),
      4000
    );

    return () => {
      clearInterval(customerInterval);
      clearInterval(workerInterval);
    };
  }, []);

  return (
    <section className="se-experience" aria-labelledby="se-title">
      <div className="se-inner">
        {/* === STORIES === */}
        <div className="se-stories" data-aos="fade-up">
          <header className="se-header">
            <h2 id="se-title" className="se-title">Every Home Has a Story</h2>
            <p className="se-subtitle">
              See how our trusted cleaners make homes shine — and lives better.
            </p>
          </header>

          <div className="se-stories-grid">
            {/* CUSTOMER */}
            <article className="se-card se-card--story" data-aos="fade-up" data-aos-delay="160">
              <div className="se-image-wrap story-carousel">
                {customerImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Customer Slide ${i + 1}`}
                    className={`story-slide ${i === customerIndex ? "active" : ""}`}
                  />
                ))}
              </div>

              <div className="se-copy">
                <h3>Customer Story</h3>
                <blockquote>
                  “Ever since I joined Servana, I’ve had the same cleaner every week — she’s part of our family now.”
                </blockquote>
                <p className="se-credit">— Mary, Nyayo Estate Resident</p>
              </div>
            </article>

            {/* WORKER */}
            <article className="se-card se-card--story" data-aos="fade-up" data-aos-delay="80">
              <div className="se-image-wrap story-carousel">
                {workerImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Worker Slide ${i + 1}`}
                    className={`story-slide ${i === workerIndex ? "active" : ""}`}
                  />
                ))}
              </div>

              <div className="se-copy">
                <h3>Worker Story</h3>
                <blockquote>
                  As a Servana Pro from Embakasi, I started with one client in Nyayo Estate.
                  Today I manage five homes weekly,building a steady income in Servana.
                </blockquote>
                <p className="se-credit">— Lucy, Servana Staff</p>
              </div>
            </article>
          </div>

          <div className="se-cta" data-aos="fade-up" data-aos-delay="320">
            <button className="se-btn" onClick={handleComingSoon}>
              Ready to experience Servana care?
            </button>
          </div>
        </div>

        {/* === JOURNAL === */}
        <div className="se-journal" data-aos="fade-up">
          <header className="se-journal-header">
            <h3 className="se-journal-title">From the Servana Journal</h3>
            <p className="se-journal-sub">
              Insights, advice, and inspiration from our trusted home experts.
            </p>
          </header>

          <div className="se-journal-layout">
            <div className="se-journal-right" data-aos="fade-up" data-aos-delay="160">
              
              {/* FEATURED */}
              <div className="se-featured">
                <div className="se-featured-text">
                  <h4>Better Homes Begin Here</h4>
                  <p className="se-featured-summary">
                    Practical advice, inspiring stories, and Servana’s modern approach to making every home a place of balance and care.
                  </p>
                  <div className="se-featured-actions">
                  </div>
                </div>
              </div>

              {/* === 🔵 BUBBLE BUTTONS (NEW) === */}
              <div className="se-bubble-row" data-aos="fade-up" data-aos-delay="200">
                {articles.map((a, i) => (
                  <button
                    key={a.id}
                    className="se-bubble"
                    onClick={() => navigate(`/blog/${a.id}`)}
                    data-aos="fade-up"
                    data-aos-delay={`${240 + i * 80}`}
                  >
                    <img src={a.image} alt={a.title} className="se-bubble-icon" />
                    <span className="se-bubble-title">{a.title}</span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
