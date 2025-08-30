import "../styles/Sections.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
