import { motion } from "framer-motion";
import "../styles/Sections.css";

function Portfolio() {
  const projects = [
    { title: "Project One", img: "https://via.placeholder.com/300" },
    { title: "Project Two", img: "https://via.placeholder.com/300" },
    { title: "Project Three", img: "https://via.placeholder.com/300" },
  ];

  return (
    <section id="portfolio" className="section">
      <h2>Our Work</h2>
      <div className="cards">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h3>{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
