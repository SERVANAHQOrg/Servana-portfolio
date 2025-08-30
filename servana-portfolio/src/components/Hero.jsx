import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to MyCompany
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We provide innovative business solutions to help you grow.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Get Started
      </motion.button>
    </section>
  );
}

export default Hero;
