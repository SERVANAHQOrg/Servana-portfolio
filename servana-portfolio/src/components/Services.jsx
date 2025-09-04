import "../styles/Services.css";
import { FaBroom, FaPlug, FaTruck, FaLeaf, FaBug, FaTools, FaHome, FaHammer, FaCouch, FaChair, FaDumbbell } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-filters">
        <button className="active">All Services</button>
        <button>Cleaning</button>
        <button>Plumbing</button>
        <button>Electrical</button>
        <button>Moving</button>
        <button>Landscaping</button>
      </div>

      <div className="service-grid">
        <div className="service-item"><FaBroom /><p>Cleaning</p></div>
        <div className="service-item"><FaPlug /><p>Plumbing</p></div>
        <div className="service-item"><FaTruck /><p>Moving</p></div>
        <div className="service-item"><FaLeaf /><p>Landscaping</p></div>
        <div className="service-item"><FaBug /><p>Pest Control</p></div>
        <div className="service-item"><FaTools /><p>Appliance Repair</p></div>
        <div className="service-item"><FaHome /><p>Home Repair</p></div>
        <div className="service-item"><FaHammer /><p>Handyman</p></div>
        <div className="service-item"><FaCouch /><p>Furniture Assembly</p></div>
        <div className="service-item"><FaChair /><p>Handyman</p></div>
        <div className="service-item"><FaDumbbell /><p>Heavy Lifting</p></div>
      </div>
    </section>
  );
}

export default Services;
