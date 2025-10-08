import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/servanalogo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="footer">
      {/* LEFT: Links + Socials */}
      <div className="footer-left">
        <nav className="footer-links">
          <a onClick={() => handleScroll("about")}>About</a>
          <a onClick={() => handleScroll("services")}>Services</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>

        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://x.com" aria-label="X"><FaXTwitter /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* RIGHT: Logo + Tagline + Copy */}
      <div className="footer-right">
        <img src={logo} alt="Servana logo" className="footer-logo" />
        <p className="tagline">Your Home, Our Care</p>
        <p className="copy">© {year} Servana. All rights reserved.</p>
      </div>
    </footer>
  );
}
