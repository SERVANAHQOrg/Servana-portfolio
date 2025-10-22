import "../styles/HomeStory.css";
import WorkerImg from "../assets/wrk.png";
import CustomerImg from "../assets/fam.png";
import Gallery1 from "../assets/iron.png";
import Gallery2 from "../assets/serv.png";
import Gallery3 from "../assets/cli.png";

export default function HomeStory() {
  return (
    <section className="home-story">
      <div className="story-inner" data-aos="fade-up" data-aos-duration="1000">
        <div className="story-text-block">
          <h2 className="story-title">Every Home Has a Story</h2>
          <p className="story-subtitle">
            See how our trusted cleaners make homes shine — and lives better.
          </p>

          <div className="story-landscape">
            {/* Worker Story */}
            <div className="story-card">
              <img src={WorkerImg} alt="Servana Pro" className="story-photo" />
              <div className="story-info">
                <h3>Worker Story</h3>
                <p>
                  <strong>Lucy</strong>, a Servana Pro from Embakasi, started
                  with one client in Nyayo Estate.
                </p>
                <p>
                  Today, she manages five homes weekly — building a steady income
                  through Servana.
                </p>
              </div>
            </div>

            {/* Customer Story */}
            <div className="story-card">
              <img src={CustomerImg} alt="Servana customer" className="story-photo" />
              <div className="story-info">
                <h3>Customer Story</h3>
                <blockquote>
                  “Ever since I joined Servana, I’ve had the same cleaner every
                  week — she’s part of our family now.”
                </blockquote>
                <p className="story-credit">— Mary, Nyayo Estate Resident</p>
              </div>
            </div>
          </div>

          {/* Mini Gallery */}
          <div className="story-gallery">
            <h4>Mini Gallery</h4>
            <div className="gallery-images">
              <img src={Gallery1} alt="Servana Pro cleaning" />
              <img src={Gallery2} alt="Servana Pro cleaning" />
              <img src={Gallery3} alt="Servana client" />
            </div>
          </div>

          {/* CTA */}
          <div className="story-cta">
            <button className="story-btn">Ready to experience Servana care?</button>
          </div>
        </div>
      </div>
    </section>
  );
}
