import "../styles/Footer.css";
import "../styles/ContactJoin.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/servanalogo.png";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <img src={logo} alt="Servana logo" className="footer-logo" />
            <p className="tagline">Your Home, Our Care</p>
          </div>

          {/* Navigation */}
          <nav className="footer-links">
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => handleScroll("services")}>Services</button>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>

          {/* Social */}
          <div className="footer-social">
            <a aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a aria-label="Instagram">
              <FaInstagram />
            </a>
            <a aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a aria-label="Twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p>© {year} Servana. All rights reserved.</p>
        </div>

        {/* Contact Blob */}
        <div className="contact-blob" onClick={() => setOpen(true)}>
          Get in<br />Touch
        </div>
      </footer>

      {/* ===== POPUP PANEL (rendered outside footer so it can't change footer size) ===== */}
      <div className={`contact-popup ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="close-popup" onClick={() => setOpen(false)}>
          ✕
        </button>
        <h2>Contact Us / Join Us</h2>
        <div className="contact-grid">
          {/* contact form */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: wire up real submit
              alert("Message sent (demo).");
              setOpen(false);
            }}
          >
            <input name="name" type="text" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>

          {/* join block */}
          <div className="join-block">
            <h3>Become a Servana Pro</h3>
            <p>Skilled professional? Grow your business with verified clients.</p>
            <button
              type="button"
              className="join-btn"
              onClick={() => {
                // example behavior
                alert("Coming soon!");
                setOpen(false);
              }}
            >
              Join Servana Pro
            </button>
          </div>
        </div>

        <div className="quick-icons">
          <a href="https://wa.me/254715429924" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="tel:+254715429924" aria-label="Phone">
            <FaPhoneAlt />
          </a>
          <a href="mailto:support@servana.africa" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </>
  );
}