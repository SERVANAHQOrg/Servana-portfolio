import "../styles/Services.css";
import { FaBroom, FaPlug, FaTruck, FaLeaf, FaBug, FaTools, FaHome, FaHammer, FaCouch, FaChair, FaDumbbell } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="services">
      <h2 data-aos="fade-up" data-aos-duration="1000">Services</h2>

      <div className="service-grid">
        <div className="service-item" data-aos="zoom-in" data-aos-delay="100"><FaBroom /><p>Cleaning</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="200"><FaPlug /><p>Electrician</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="300"><FaTruck /><p>Moving</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="400"><FaLeaf /><p>Landscaping</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="500"><FaBug /><p>Pest Control</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="600"><FaTools /><p>Appliance Repair</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="700"><FaHome /><p>Home Repair</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="800"><FaHammer /><p>Handyman</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="900"><FaCouch /><p>Furniture Assembly</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="1000"><FaChair /><p>Handyman</p></div>
        <div className="service-item" data-aos="zoom-in" data-aos-delay="1100"><FaDumbbell /><p>Heavy Lifting</p></div>
      </div>
    </section>
  );
}

export default Services;
