import "../styles/CommunityImpact.css";
import estate from "../assets/estate.jpeg"; // add a suitable image
import { useState } from "react";

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

  const nextSlide = () => setIndex((index + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="community-impact">
      {/* Left visual */}
      <div className="ci-image">
        <img src={estate} alt="Community illustration" />
      </div>

      {/* Right content */}
      <div className="ci-content">
        <h2>Trusted by Nyayo,<br />expanding across Nairobi.</h2>

        <div className="ci-carousel">
          <p className="ci-quote">“{testimonials[index].text}”</p>
          <p className="ci-author">— {testimonials[index].name}</p>

          <div className="ci-controls">
            <button onClick={prevSlide} aria-label="Previous testimonial">‹</button>
            <button onClick={nextSlide} aria-label="Next testimonial">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
