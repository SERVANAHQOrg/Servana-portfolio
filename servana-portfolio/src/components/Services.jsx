import { motion } from "framer-motion";
import "../styles/Sections.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }
  }),
};

function Services() {
  const services = [
    { title: "Web Development", text: "Responsive and modern websites to boost your online presence." },
    { title: "Digital Marketing", text: "Targeted strategies to help you reach and grow your audience." },
    { title: "Business Consulting", text: "Expert advice to optimize operations and maximize profits." },
  ];

  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="cards">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
