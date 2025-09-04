import { Link } from "react-scroll";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">SERVANA</h1>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li className='tooltip'>
            <Link to="hero" smooth={true} duration={500}><i class="fa-regular fa-house"></i>
        <span className="tooltiptext">Home</span>
        </Link></li>

        <li className='tooltip'>
            <Link to="about" smooth={true} duration={500}><i class="fa-regular fa-lightbulb"></i>
            <span className="tooltiptext">About</span>
            </Link></li>
        <li className='tooltip'>
            <Link to="services" smooth={true} duration={500}><i class="fa-solid fa-hand-holding-heart"></i>
            <span className="tooltiptext">Services</span>
            </Link></li>
        <li className='tooltip'>
            <Link to="contact" smooth={true} duration={500}><i className="fa-solid fa-phone"></i>
            <span className="tooltiptext">Contact</span>
            </Link></li>

      </ul>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
