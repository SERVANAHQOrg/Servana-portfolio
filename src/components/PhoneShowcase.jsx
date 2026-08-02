import "../styles/PhoneShowcase.css";
import { motion } from "framer-motion";

export default function PhoneShowcase({
  frontImage,
  backImage,
  theme = "green",
}) {
  return (
    <motion.div
    className={`phone-showcase ${theme}`}
    initial={{
        opacity:0,
        y:80,
        scale:.9
    }}
    whileInView={{
        opacity:1,
        y:0,
        scale:1
    }}
    viewport={{
        once:true
    }}
    transition={{
        duration:.8
    }}
>
    <div className="phones">

      <div className="showcase-glow"></div>

      {/* Back Phone */}
      <div className="phone-back">

    <div className="iphone">

        <div className="dynamic-island"></div>



<img
    src={backImage}
    alt=""
/>



        <div className="shine"></div>

    </div>

</div>

      {/* Front Phone */}

      <div className="phone-front">

    <div className="iphone">

        <div className="dynamic-island"></div>



<img
    src={frontImage}
    alt=""
/>



        <div className="shine"></div>

    </div>

</div>

</div>

    </motion.div>
  );
}