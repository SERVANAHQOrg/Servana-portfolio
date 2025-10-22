import "../styles/About.css";
import "../styles/Founder.css";
import founderImg from "../assets/founder.jpeg";
import AbtImg from "../assets/Abt-img.svg";
import PromImg from "../assets/Promise.svg";
import VisImg from "../assets/vision.svg";
import WeImg from "../assets/we.svg";
import WhyImg from "../assets/family-img.svg";
import ListenImg from "../assets/listen.svg";

function About() {

  return (
    <section id="about" className="about">
      <h1>Get To Know Servana</h1>
      
      {/* === About Us === */}
      <div className="about-wrapper">
        <div className="about-layer layerr1"></div>
        <div className="about-layer layerr2"></div>

        <div className="we-text" data-aos="fade-up" data-aos-duration="1000">
          <h2>About Us</h2>
          <p>
            At Servana, we believe a home is more than walls and rooms — it’s where life happens. Our mission is to make everyday living easier, safer, and more enjoyable by connecting households with trusted, vetted professionals who deliver excellence at every doorstep.
            
            Our mission is to provide convenient, reliable, and high-quality service solutions for your home.
          </p>
        </div>

        {/* Human image on the right */}
        <img src={AbtImg} alt="About illustration" className="about-human about-human-right" />
      </div>

      {/* === Who We Are === */}
      <div className="about-wrapper2">
        <div className="about-layer layerr1"></div>
        <div className="about-layer layerr2"></div>

        {/* Human image on the left */}
        <img src={WeImg} alt="Who we are illustration" className="about-human about-human-left" />

        <div className="we-text" data-aos="fade-up" data-aos-duration="1000">
          <h3>Who We Are</h3>
          <p>Born in Nairobi and designed for communities everywhere, Servana is a tech-driven service marketplace built on trust, transparency, and empathy. From cleaning and repairs to beauty and grooming, Servana brings the right people, with the right skills, to the right home — right on time.</p>
        </div>
      </div>

      {/* === Why We Exist === */}
      <div className="about-wrapper">
        <div className="about-layer layerr1"></div>
        <div className="about-layer layerr2"></div>

        <div className="we-text" data-aos="fade-up" data-aos-duration="1000">
          <h3>Why We Exist</h3>
          <p>Families often struggle to find reliable, affordable, and safe service providers. Servana reimagines this with rigorous vetting, community-first growth, and smart technology to make service booking seamless and stress-free.</p>
        </div>

        {/* Human image on the right */}
        <img src={WhyImg} alt="Why we exist illustration" className="about-human about-human-right" />
      </div>

      {/* === Our Promise === */}
      <div className="about-wrapper2">
        <div className="about-layer layerr1"></div>
        <div className="about-layer layerr2"></div>

        {/* Human image on the left */}
        <img src={PromImg} alt="Our promise illustration" className="about-human about-human-left" />

        <div className="we-text" data-aos="fade-up" data-aos-duration="1000">
          <h3>Our Promise</h3>
          <p>Trust & Safety: Every professional is background-checked and trained.

             Seamless Technology: Book, track, and pay with ease.

             Empowering Communities: Creating jobs, building dignity, and uplifting local economies.</p>
        </div>
      </div>

      {/* === Our Vision === */}
      <div className="about-wrapper">
        <div className="about-layer layerr1"></div>
        <div className="about-layer layerr2"></div>

        <div className="we-text" data-aos="fade-up" data-aos-duration="1000">
          <h3>Our Vision</h3>
          <p>We see a future where every home in Africa enjoys quality, affordable, and reliable services at the tap of a button — where households thrive, and service providers grow into proud entrepreneurs.</p>
        </div>

        {/* Human image on the right */}
        <img src={VisImg} alt="Our vision illustration" className="about-human about-human-right" />
      </div>

{/* === Our Story (Updated Style) === */}
<div className="about-story" data-aos="fade-up" data-aos-duration="1200">
  <h3>Our Story</h3>

  <div className="story-inner">
    <div className="story-text">
      <p>
        <strong>It began with a question:</strong><br />
        Why is it so hard to find someone trustworthy when you need them most?
        Families across Nairobi faced the same frustrations — unreliable
        workers, safety concerns, and inconsistent service.
      </p>

      <p>
        <strong>Born in Nairobi, built for communities everywhere.</strong><br />
        Servana started in Nyayo Estate, listening to families who wanted more
        than just a quick fix — they wanted trust, care, and reliability.
      </p>

      <p>
        <strong>The Spark → The Movement</strong><br />
        What began as an idea has become a movement of vetted professionals,
        seamless technology, and communities strengthened through trust and
        care.
      </p>

      <p>
        <strong>The Future</strong><br />
        Our story is still unfolding. With every home we serve, we move closer
        to a world where convenience meets reliability, and where communities
        across Africa thrive together.
      </p>

      <p className="story-quote">
        “Servana isn't just a service platform --- it's a movement of trust, respect, and connection.
         Together, we're redefining what it means to serve.”
      </p>

      <button className="story-btn" onClick={() => alert("Coming soon!")}>
        Join the Movement
      </button>
    </div>

    <div className="story-image">
      <img src={ListenImg} alt="Servana Story" />
    </div>
  </div>
</div>



      {/* Founder section unchanged */}
      <div className="founder-wrapper">
        <div className="founder-layer layer1"></div>
        <div className="founder-layer layer2"></div>

        <div className="founder-section" data-aos="fade-right" data-aos-duration="1000">
          <div className="founder-img" data-aos="zoom-in" data-aos-delay="300">
            <img src={founderImg} alt="Founder" />
          </div>
          <div className="founder-text" data-aos="fade-left" data-aos-delay="500">
            <h2>Meet Our Founder</h2>
            <span className="founder-tag">Stephen Mambo as CEO Founder</span>
            <p> 
              At the heart of Servana is Stephen Mambo, our Founder & CEO — a dreamer turned builder who believed that trust, care, and technology could come together to transform how homes across Africa experience everyday life. <br /><br /> From Nairobi’s vibrant communities came his vision: to create a platform that doesn’t just connect people to services, but uplifts families, empowers workers, and strengthens communities. <br /><br /> Guided by empathy and driven by innovation, Steph embodies Servana’s spirit — bold, human, and unshakably committed to building a future where every home feels cared for and every professional feels valued. <br /><br /> “I started Servana because every family deserves peace of mind, and every worker deserves dignity. This is more than business — it’s a movement.”
               </p>
          </div>
        </div>
      </div>

      <div className="about-cards" data-aos="fade-up" data-aos-duration="1000">
        <div className="card" data-aos="flip-left" data-aos-delay="200">
          <h4>What We Do</h4>
          <p>We connect customers with experienced professionals for a wide range of home service needs.</p>
        </div>
        <div className="card" data-aos="flip-left" data-aos-delay="400">
          <h4>Our Values</h4>
          <p>We value integrity, customer satisfaction, and continuous improvement.</p>
        </div>
        <div className="card" data-aos="flip-left" data-aos-delay="600">
          <h4>Why Choose Us</h4>
          <p>We stand out by offering an easy-to-use platform, competitive pricing, and a strict vetting process.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
