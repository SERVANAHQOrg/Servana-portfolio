import { Link } from "react-scroll";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MyCompany</h1>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
