import { useState } from "react";
import "../styles/Services.css";
import HowItWorks from "./HowItWorks";
import { FaQuestion } from "react-icons/fa";
import {
  FaBroom,
  FaTshirt,
  FaTools,
  FaPlug,
  FaPaintRoller,
  FaCut,
  FaLeaf,
  FaBug,
  FaHammer,
  FaUtensils,
  FaTruck,
  FaLock,
  FaCouch,
  FaSpa,
  FaFaucet,
} from "react-icons/fa";

function Services() {
  const [showAll, setShowAll] = useState(false);
  const [showHow, setShowHow] = useState(false);

  const services = [
    { icon: <FaBroom />, title: "Home Cleaning", desc: "Keep your home spotless with trusted cleaners.", available: true },
    { icon: <FaFaucet />, title: "Plumbing", desc: "Reliable plumbing and pipe repair services.", available: true },
    { icon: <FaPlug />, title: "Electrical Services", desc: "Expert repairs, wiring, and lighting setups.", available: true },
    { icon: <FaTools />, title: "Appliance Repair", desc: "Fixing fridges, washers, and other appliances.", available: true },
    { icon: <FaCut />, title: "Beauty & Grooming", desc: "Salon and barber services from your home.", available: true },
    { icon: <FaTshirt />, title: "Laundry & Ironing", desc: "Fresh, neatly pressed clothes done at home.", available: true },
    // Coming soon
    { icon: <FaSpa />, title: "Massage & Wellness", desc: "Relax with certified therapists at home.", available: false },
    { icon: <FaPaintRoller />, title: "Home Painting", desc: "Refresh your walls with professional painters.", available: false },
    { icon: <FaLeaf />, title: "Gardening & Landscaping", desc: "Maintain a green and clean outdoor space.", available: false },
    { icon: <FaBug />, title: "Pest Control", desc: "Keep your home safe from pests and insects.", available: false },
    { icon: <FaHammer />, title: "Handyman Services", desc: "Small repairs and furniture fixes made easy.", available: false },
    { icon: <FaUtensils />, title: "Cooking & Meal Prep", desc: "Assistance with healthy, fresh meal prep.", available: false },
    { icon: <FaTruck />, title: "Moving & Relocation", desc: "Smooth and careful home relocation support.", available: false },
    { icon: <FaLock />, title: "Security Systems", desc: "Install CCTV, alarms, and smart locks securely.", available: false },
    { icon: <FaCouch />, title: "Home Décor & Setup", desc: "Style and organize your home beautifully.", available: false },
  ];

  // Determine which services to show
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="services">
      <h2 data-aos="fade-up" data-aos-duration="1000">Services</h2>
    <div className="service-grid-wrapper">
      <div className="service-grid">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className={`service-item ${!service.available ? "coming-soon" : ""}`}
            data-aos="zoom-in"
            data-aos-delay={`${100 * (index + 1)}`}
          >
            {service.icon}
            <p>{service.title}</p>
            <span>{service.desc}</span>
            {!service.available && <div className="coming-soon-label">Coming Soon</div>}
          </div>
        ))}

        <button
  className="show-how-btn-circle"
  onClick={() => setShowHow(true)}
>
  <FaQuestion />
</button>

{/* POPUP MODAL */}
{showHow && (
  <div className="how-modal-overlay" onClick={() => setShowHow(false)}>
    <div
      className="how-modal-box"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-how-modal"
        onClick={() => setShowHow(false)}
      >
        ✕
      </button>

      <HowItWorks />
    </div>
  </div>
)}
      </div>

      {/* Show More / Show Less Button */}
      {services.length > 6 && (
        <button
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More Services"}
        </button>
      )} 
      </div>
    </section>
  );
}

export default Services;
