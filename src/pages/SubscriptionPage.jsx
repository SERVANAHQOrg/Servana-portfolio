import React from "react";
import "../styles/SubscriptionPage.css";
import StarterImg from "../assets/start.svg";
import PlusImg from "../assets/mid.svg";
import EliteImg from "../assets/super.svg";

export default function SubscriptionPage() {
  return (
    <section className="subscription-page">

      {/* === Hero Section === */}
      <div className="sub-hero">
        <div className="sub-text">
          <h1>The Servana Movement Begins Now</h1>
          <p>Choose your place in the movement and enjoy the care you deserve.</p>
          <div className="sub-cta-buttons">
            <button className="btn-primary">Start Membership</button>
          </div>
        </div>
      </div>

      {/* === Subscription Tiers === */}
      <div className="sub-tiers">

        {/* Starter */}
        <div className="sub-tier-card">
          <img src={StarterImg} alt="Starter Plan" />
          <h3>Servana Starter</h3>
          <p>Experience care, no strings attached.</p>
          <ul>
            <li>Access to trusted workers</li>
            <li>Standard booking support</li>
            <li>Entry into the Servana community</li>
          </ul>
          <button className="btn-primary">Choose Starter</button>
        </div>

        {/* Plus (Most Popular) */}
        <div className="sub-tier-card highlight">
          <img src={PlusImg} alt="Plus Plan" />
          <h3>Servana Plus</h3>
          <p>More care. More savings.</p>
          <ul>
            <li>Priority booking</li>
            <li>Discounted convenience fees</li>
            <li>Free monthly home check-up</li>
          </ul>
          <button className="btn-primary">Choose Plus</button>
        </div>

        {/* Elite */}
        <div className="sub-tier-card">
          <img src={EliteImg} alt="Elite Plan" />
          <h3>Servana Elite</h3>
          <p>Because your home deserves the best.</p>
          <ul>
            <li>24/7 VIP booking line</li>
            <li>Exclusive offers & partner perks</li>
            <li>Free family wellness add-ons</li>
          </ul>
          <button className="btn-primary">Choose Elite</button>
        </div>

      </div>
    </section>
  );
}
