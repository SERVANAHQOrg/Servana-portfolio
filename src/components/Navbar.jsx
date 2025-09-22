import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/servanalogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for homepage to load, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Servana Logo" className="logo-icon" />
        <span className="brand-name">Servana</span>
      </div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li className='tooltip' onClick={() => handleScroll("hero")}>
          <i className="fa-regular fa-house"></i>
          <span className="tooltiptext">Home</span>
        </li>
        <li className='tooltip' onClick={() => handleScroll("about")}>
          <i className="fa-regular fa-lightbulb"></i>
          <span className="tooltiptext">About</span>
        </li>
        <li className='tooltip' onClick={() => handleScroll("services")}>
          <i className="fa-solid fa-hand-holding-heart"></i>
          <span className="tooltiptext">Services</span>
        </li>
        <li className='tooltip' onClick={() => handleScroll("contact")}>
          <i className="fa-solid fa-phone"></i>
          <span className="tooltiptext">Contact</span>
        </li>
      </ul>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
