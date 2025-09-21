import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/ReferralChallenge.css";
import UserImg from "../assets/user.svg";
import ProImg from "../assets/team.svg";
import PplImg from "../assets/people.svg";
import System from "../assets/system.svg";

export default function ReferralChallenge() {
  const navigate = useNavigate();

  const goToSubscriptions = () => {
    navigate("/subscriptions"); // Replace with your actual subscriptions route
  };

  return (
    <section className="referral-page">

      {/* === Hero Section === */}
      <div className="ref-wrapperrr">
        <img src={PplImg} alt="Referral illustration" className="ref-humann" />
        <div className="ref-text" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="header">The Servana Movement Begins Now. Be part of it.</h1>
          <p>Join, refer friends, and unlock rewards while empowering your community.</p>
          <div className="hero-cta-buttons">
            <button className="btn-primary" onClick={goToSubscriptions}>Choose Your Plan</button>
          </div>
        </div>
      </div>

      {/* === Refer & Earn Header (Centered) === */}
      <div className="referral-header" style={{ textAlign: "center", margin: "2rem 0" }}>
        <h3>Refer & Earn</h3>
        <p>Bring others, earn rewards, and climb the movement tiers.</p>
      </div>

      {/* === User Side Tiers === */} 
      <div className="ref-wrapper">
        <img src={UserImg} alt="User referral illustration" className="ref-human ref-human-left" />
        <div className="ref-text" data-aos="fade-up" data-aos-duration="1000">
          <h2>User Side</h2>
          <div className="ref-tier-card">
            <h4>Tier 1: Home Hero</h4>
            <p>Refer 3 friends → Free cleaning/grooming session</p>
          </div>
          <div className="ref-tier-card">
            <h4>Tier 2: Estate Ambassador</h4>
            <p>Refer 10 friends → 3 months free subscription</p>
          </div>
          <div className="ref-tier-card highlight">
            <h4>Tier 3: Servana Pioneer</h4>
            <p>Refer 25 friends → Lifetime Elite membership + Founders Wall recognition</p>
          </div>
        </div>
      </div>

      {/* === Pro Side Tiers (Alternating Right) === */}
      <div className="ref-wrapper2">
        <img src={ProImg} alt="Pro referral illustration" className="ref-human ref-human-right" />
        <div className="ref-text" data-aos="fade-up" data-aos-duration="1000">
          <h2>Servana-Pro</h2>
          <div className="ref-tier-card">
            <h4>Tier 1: Hustler</h4>
            <p>Refer 3 workers → KES 500 + Airtime</p>
          </div>
          <div className="ref-tier-card">
            <h4>Tier 2: Builder</h4>
            <p>Refer 6 workers → KES 1,000 + Verified Badge</p>
          </div>
          <div className="ref-tier-card highlight">
            <h4>Tier 3: Champion</h4>
            <p>Refer 10 workers → KES 5,000 + Elite Badge</p>
          </div>
        </div>
      </div>

      {/* === Referral Code System (Alternating Left) === */}
      <div className="ref-wrapper">
        <img src={System} alt="Code system illustration" className="ref-human ref-human-left" />
        <div className="ref-text" data-aos="fade-up" data-aos-duration="1000">
          <h3>Referral Code System</h3>
          <p>Unique code generated for each user, copy/share easily.</p>
          <p>Apply during sign-up or from Profile.</p>
          <p>Admin dashboard tracks usage and milestones.</p>
          <p>Security: one-time use, fraud detection, time limits.</p>
        </div>
      </div>

      {/* === CTA Banner === */}
      <div className="cta-banner" data-aos="fade-up" data-aos-duration="1000">
        Servana isn’t just an app. It’s a movement of families, workers, and neighbors coming together to care for what matters most.
        <div className="hero-cta-buttons">
          <button className="btn-secondary" onClick={goToSubscriptions}>Start Your Membership</button>
        </div>
      </div>
    </section>
  );
}
