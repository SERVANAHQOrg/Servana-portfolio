import "../styles/HowItWorks.css";
import { FaListAlt, FaCalendarCheck, FaUserCheck } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaListAlt />,
      title: "Choose Service",
      text: "Browse our wide range of trusted home services.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Book Instantly",
      text: "Select a time that fits your schedule—no calls needed.",
    },
    {
      icon: <FaUserCheck />,
      title: "Get Served",
      text: "A verified professional arrives and gets the job done.",
    },
  ];

  return (
    <section className="how-it-works">
      <h2 className="hiw-title">How It Works</h2>

      <div className="hiw-steps">
        {steps.map((step, i) => (
          <div key={i} className="hiw-step">
            <div className="hiw-icon">{step.icon}</div>
            <h3>{`Step ${i + 1}: ${step.title}`}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <button className="hiw-cta">Start Now</button>
    </section>
  );
}
