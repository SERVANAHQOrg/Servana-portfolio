import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dyk.css";

export default function Dyk() {
  const navigate = useNavigate();

  return (
    <section className="did-you-know" data-aos="fade-up">
      <div className="container">
        <h2>Did you know…</h2>
        <p>
          Servana runs a <strong>Referral Challenge</strong> where you can invite
          friends, earn rewards, and even unlock VIP perks.
        </p>
        <button
          className="dyk-btn"
          onClick={() => navigate("/referral")}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
