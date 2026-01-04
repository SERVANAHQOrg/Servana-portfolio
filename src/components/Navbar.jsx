// Navbar.jsx
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/servanalogo.png";

function Navbar({onContactClick}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // detect scroll -> toggle bubble mode
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-to-id helper (renamed to avoid collision)
  const scrollToId = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // wait for homepage to render and then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // When route changes, close menu
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "bubble" : ""}`} aria-label="Main navigation">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Servana Logo" className="logo-icon" />
          <span className="brand-name">Servana</span>
        </div>

        {/* Desktop / normal links — hidden in bubble mode via CSS */}
      <ul
  className={`nav-links ${open ? "open popup" : ""}`}
  role="menu"
>
  <li onClick={() => scrollToId("hero")}>
    <i className="fa-regular fa-house"></i>
    <span className="link-text">Home</span>
  </li>

  <li
    onClick={() => {
      navigate("/about");
      setOpen(false);
    }}
  >
    <i className="fa-regular fa-lightbulb"></i>
    <span className="link-text">About</span>
  </li>

  <li onClick={() => scrollToId("services")}>
    <i className="fa-solid fa-hand-holding-heart"></i>
    <span className="link-text">Services</span>
  </li>

  <li onClick={() => {onContactClick();
    setOpen(false);
  }}>
    <i className="fa-solid fa-phone"></i>
    <span className="link-text">Contact</span>
  </li>
      </ul>

        {/* Menu toggle / bubble button */}
        <button
          className={`menu-toggle ${scrolled ? "bubble-btn" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {/* You can replace with an SVG icon if preferred */}
          <span className="menu-icon">☰</span>
        </button>
      </nav>
      {/* RIGHT SLIDE-OUT SIDEBAR — uses same "open" state */}
<div className={`servana-sidebar ${open ? "show" : ""}`}>
  <ul>
    <li onClick={() => scrollToId("hero")}>•Home</li>
    <li onClick={() => { navigate("/about"); setOpen(false); }}>•About</li>
    <li onClick={() => scrollToId("services")}>•Services</li>
    <li onClick={() => {onContactClick(); setOpen(false);}}>•Contact</li>
  </ul>

  <button className="sidebar-close" onClick={() => setOpen(false)}>×</button>
</div>


      {/* Overlay to close when clicking outside */}
      {open && <div className="bubble-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Navbar;
