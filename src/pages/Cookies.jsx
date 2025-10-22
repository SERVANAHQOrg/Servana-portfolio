import "../styles/Legal.css";

export default function Cookies() {
  return (
    <div className="legal-page">
      <h1>Cookie Policy</h1>

      <section>
        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files stored on your browser to enhance experience and analytics.</p>
      </section>

      <section>
        <h2>Types of Cookies Used</h2>
        <ul>
          <li>Essential Cookies – Required for website functionality.</li>
          <li>Performance Cookies – Collect anonymous data to improve performance.</li>
          <li>Functional Cookies – Remember user preferences.</li>
          <li>Advertising Cookies – Deliver relevant ads and measure their effectiveness.</li>
        </ul>
      </section>

      <section>
        <h2>Managing Cookies</h2>
        <p>Users can accept, reject, or modify cookie settings via the cookie banner. Disabling certain cookies may affect functionality.</p>
      </section>

      <section>
        <h2>Third-Party Cookies</h2>
        <p>Some analytics and marketing services (e.g., Google Analytics) may set cookies.</p>
      </section>

      <section>
        <h2>Consent</h2>
        <p>Continued use of Servana’s site constitutes cookie consent.</p>
      </section>
    </div>
  );
}
