import "../styles/Blog.css";
import { useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TipImg from "../assets/bulb.gif"; // using decoy image
import CleanerImg from "../assets/choose.svg";
import MaintainImg from "../assets/clean.svg";

export default function Blog() {
  const navigate = useNavigate();

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        {/* === Header === */}
        <div className="blog-header fade-up">
          <h2>From the Servana Journal</h2>
          <p>Insights, advice, and inspiration from our trusted home experts.</p>
        </div>

        {/* === Featured Article === */}
        <div className="blog-featured fade-up">
          <div className="featured-text">
            <h3>Better Homes Begin Here</h3>
            <p className="featured-summary">
             Practical advice, inspiring stories, and Servana’s modern approach to making every home a place of 
             balance and care.
            </p>
            <button
              className="readmore-btn"
              onClick={() => navigate("/blog/featured")}
            >
              Get Inspired
            </button>
          </div>
          {/* <div className="featured-icon">
            <FaLightbulb className="icon" />
          </div> */}
        </div>

        {/* === Blog Cards === */}
        <div className="blog-grid">
          {articles.map((article, index) => (
            <div
              className="blog-card fade-up"
              key={article.id}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="blog-img"
              />
              <div className="blog-info">
                <h4>{article.title}</h4>
                <p className="blog-date">{article.date}</p>
                <p className="blog-summary">{article.summary}</p>
                <button
                  className="readmore-btn"
                  onClick={() => navigate(`/blog/${article.id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
