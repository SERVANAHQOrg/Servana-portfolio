import { motion } from "framer-motion";
import "../styles/Sections.css";

function Portfolio() {
  const projects = [
    { title: "Project One", img: "https://via.placeholder.com/600x380" },
    { title: "Project Two", img: "https://via.placeholder.com/600x380" },
    { title: "Project Three", img: "https://via.placeholder.com/600x380" },
  ];

  return (
    <section id="portfolio" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Our Work
      </motion.h2>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={p.img}
              alt={p.title}
              className="card-img"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
            <h3>{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
