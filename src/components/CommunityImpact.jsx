import "../styles/CommunityImpact.css";
import { useState, useEffect } from "react";
import estate1 from "../assets/estate.jpeg";
import estate2 from "../assets/estate2.jpeg";
import estate3 from "../assets/estate3.jpeg";

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

export default function CommunityImpact() {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  // Automatically switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="community-impact">
      {/* Left visual slideshow */}
      <div className="ci-image">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Community"
            className={`ci-slide ${i === imgIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Right content */}
      <div className="ci-content">
        <h2>
          Trusted by Nyayo,
          <br />
          expanding across Nairobi.
        </h2>

        <div className="ci-carousel">
          <p className="ci-quote">“{testimonials[index].text}”</p>
          <p className="ci-author">— {testimonials[index].name}</p>

          <div className="ci-controls">
            <button onClick={prevSlide} aria-label="Previous testimonial">
              ‹
            </button>
            <button onClick={nextSlide} aria-label="Next testimonial">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
