import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dyk.css";
import referralImg from "../assets/referral.png"; // replace with your image

export default function Dyk() {
  const navigate = useNavigate();

  return (
    <section className="did-you-know" data-aos="fade-up">
      <div className="dyk-container">
        <div className="dyk-image">
          <img src={referralImg} alt="Referral Challenge" />
        </div>
        <div className="dyk-content">
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
      </div>
    </section>
  );
}
