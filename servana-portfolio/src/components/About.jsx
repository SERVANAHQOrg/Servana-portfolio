import "../styles/About.css";
import aboutImg from "../assets/about.png"; // use illustration

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Servana is your trusted platform for booking home services delivered by vetted professionals.
          <br /><br />
          Our mission is to provide convenient, reliable, and high-quality service solutions for your home or workplace.
        </p>

        <h3>Our Story</h3>
        <p>
          Born from the desire to simplify the search for dependable home service professionals. Servana was founded to bridge the gap between skilled workers and customers seeking exceptional home maintenance services.
        </p>
      </div>

      <div className="about-img">
        <img src={aboutImg} alt="About Servana" />
      </div>

      <div className="about-cards">
        <div className="card">
          <h4>What We Do</h4>
          <p>We connect customers with experienced professionals for a wide range of home service needs.</p>
        </div>
        <div className="card">
          <h4>Our Values</h4>
          <p>We value integrity, customer satisfaction, and continuous improvement.</p>
        </div>
        <div className="card">
          <h4>Why Choose Us</h4>
          <p>We stand out by offering an easy-to-use platform, competitive pricing, and a strict vetting process.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
