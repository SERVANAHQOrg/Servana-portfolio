import "../styles/Sections.css";

function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>Responsive and modern websites to boost your online presence.</p>
        </div>
        <div className="card">
          <h3>Digital Marketing</h3>
          <p>Targeted strategies to help you reach and grow your audience.</p>
        </div>
        <div className="card">
          <h3>Business Consulting</h3>
          <p>Expert advice to optimize operations and maximize profits.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
