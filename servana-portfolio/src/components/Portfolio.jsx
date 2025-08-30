import "../styles/Sections.css";

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2>Our Work</h2>
      <div className="cards">
        <div className="card">
          <img src="https://via.placeholder.com/300" alt="Project 1" />
          <h3>Project One</h3>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300" alt="Project 2" />
          <h3>Project Two</h3>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300" alt="Project 3" />
          <h3>Project Three</h3>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
