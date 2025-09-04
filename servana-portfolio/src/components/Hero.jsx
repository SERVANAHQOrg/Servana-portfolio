import { motion } from "framer-motion";
import "../styles/Hero.css";
import familyImg from "../assets/family.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Left side: Image + Button */}
      <div className="hero-left">
        <motion.img
          src={familyImg}
          alt="family"
          className="hero-img"
          animate={{
            rotate: [0, 3, -3, 3, 0],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="hr-btn"
        >
          Get Started
        </motion.button>
      </div>

      {/* Right side: Text (centered) */}
      <div className="hero-content">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to SERVANA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We provide services to get you peace.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
