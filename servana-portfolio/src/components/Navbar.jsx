import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/servanalogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-logo">
        <img src={logo} alt="Servana Logo" className="logo-icon" />
        <span className="brand-name">SERVANA</span>
      </div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li className='tooltip'>
          <Link to="hero" smooth={true} duration={500}><i className="fa-regular fa-house"></i>
            <span className="tooltiptext">Home</span>
          </Link>
        </li>
        <li className='tooltip'>
          <Link to="about" smooth={true} duration={500}><i className="fa-regular fa-lightbulb"></i>
            <span className="tooltiptext">About</span>
          </Link>
        </li>
        <li className='tooltip'>
          <Link to="services" smooth={true} duration={500}><i className="fa-solid fa-hand-holding-heart"></i>
            <span className="tooltiptext">Services</span>
          </Link>
        </li>
        <li className='tooltip'>
          <Link to="contact" smooth={true} duration={500}><i className="fa-solid fa-phone"></i>
            <span className="tooltiptext">Contact</span>
          </Link>
        </li>
      </ul>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
