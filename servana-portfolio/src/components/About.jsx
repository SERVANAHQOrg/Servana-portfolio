import "../styles/About.css";
import aboutImg from "../assets/corporate.jpg";
import founderImg from "../assets/founder.jpeg"; // 👈 add your founder image in assets

function About() {
  const fallbackImg = "https://via.placeholder.com/400x300?text=About+Us";
  const safeImg = aboutImg || fallbackImg;

  return (
    <section id="about" className="about">
      <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
        <h2>About Us</h2>
        <p>
          Servana is your trusted platform for booking home services delivered by vetted professionals.
          <br /><br />
          Our mission is to provide convenient, reliable, and high-quality service solutions for your home or workplace.
        </p>

        <h3>Our Story</h3>
        <p>
          Born from the desire to simplify the search for dependable home service professionals. 
          Servana was founded to bridge the gap between skilled workers and customers seeking 
          exceptional home maintenance services.
        </p>
      </div>

      <div className="about-img" data-aos="zoom-in" data-aos-duration="1000">
        {/* <img src={safeImg} alt="About Servana" /> */}
      </div>

      {/* 👇 New Founder Section */}
      <div className="founder-section" data-aos="fade-right" data-aos-duration="1000">
        <div className="founder-img" data-aos="zoom-in" data-aos-delay="300">
          <img src={founderImg} alt="Founder" />
        </div>
        <div className="founder-text" data-aos="fade-left" data-aos-delay="500">
          <h2>Meet Our Founder</h2>
          <span className="founder-tag">Mr Stephen Mambo as CEO Founder</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed at ipsum vitae lacus lobortis lacinia. Donec tristique
            arcu massa, at pharetra tortor feugiat non. Etiam vehicula
            hendrerit aliquet. Donec sed nulla dapibus.
          </p>
        </div>
      </div>

      <div className="about-cards" data-aos="fade-up" data-aos-duration="1000">
        <div className="card" data-aos="flip-left" data-aos-delay="200">
          <h4>What We Do</h4>
          <p>
            We connect customers with experienced professionals for a wide range of home service needs.
          </p>
        </div>
        <div className="card" data-aos="flip-left" data-aos-delay="400">
          <h4>Our Values</h4>
          <p>We value integrity, customer satisfaction, and continuous improvement.</p>
        </div>
        <div className="card" data-aos="flip-left" data-aos-delay="600">
          <h4>Why Choose Us</h4>
          <p>
            We stand out by offering an easy-to-use platform, competitive pricing, 
            and a strict vetting process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
