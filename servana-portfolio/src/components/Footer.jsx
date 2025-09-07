import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Servana. All Rights Reserved.</p>
      <p>
        Built with Love by <a href="https://yourcompany.com">Servana Team</a>
      </p>
    </footer>
  );
}

export default Footer;
