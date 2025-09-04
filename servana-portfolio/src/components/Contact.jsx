import { motion } from "framer-motion";
import "../styles/Sections.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
