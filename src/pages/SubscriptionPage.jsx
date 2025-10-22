import React, { useState } from "react";
import "../styles/SubscriptionPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => setIsYearly(!isYearly);

  const handleComingSoon = () => {
    toast.info("Coming soon!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  const userPlans = [
    {
      title: "Servana Basic (Free)",
      monthly: "Free",
      yearly: "Free",
      features: [
        "Access to vetted professionals",
        "Pay as you go pricing",
        "Standard support",
      ],
      colorClass: "basic-card",
    },
    {
      title: "Servana Home Essentials",
      monthly: 1000,
      yearly: 12000,
      features: [
        "2 free service calls per month",
        "5% discount on additional bookings",
        "Priority support",
      ],
      colorClass: "essentials-card",
    },
    {
      title: "Servana Home Plus",
      monthly: 2000,
      yearly: 24000,
      features: [
        "4 free service calls (weekly)",
        "10% discount on extras",
        "1 free emergency booking per month",
        "Exclusive seasonal offers",
      ],
      colorClass: "plus-card",
    },
    {
      title: "Servana Premium (VIP)",
      monthly: 5000,
      yearly: 60000,
      highlight: true,
      features: [
        "Unlimited bookings (fair usage)",
        "Free emergency/same-day bookings",
        "Free annual deep cleaning/pest control",
        "Priority access to top-rated professionals",
        "Future AI-Powered Concierge Support (Coming Soon)",
      ],
      colorClass: "vip-card",
    },
  ];

  const workerPlans = [
    {
      title: "Starter (Free)",
      monthly: "Free",
      yearly: "Free",
      features: [
        "Limited job opportunities (max 5/week)",
        "Basic profile listing",
        "Earnings direct to wallet",
      ],
      colorClass: "basic-card",
    },
    {
      title: "Pro Standard",
      monthly: 500,
      yearly: 6000,
      features: [
        "More job slots (20/week)",
        "Basic analytics",
        "Faster payouts (24-48 hrs)",
      ],
      colorClass: "essentials-card",
    },
    {
      title: "Pro Plus",
      monthly: 1500,
      yearly: 18000,
      features: [
        "Unlimited job slots",
        "Priority job matching",
        "Featured profile in search results",
        "Uniform & ID included",
        "Advanced analytics",
      ],
      colorClass: "plus-card",
    },
    {
      title: "Pro Elite",
      monthly: 3000,
      yearly: 36000,
      highlight: true,
      features: [
        "Everything in Pro Plus",
        "Free annual training/certification",
        "Insurance coverage on jobs",
        "Early access to corporate contracts",
        "Future AI-Powered Growth Insights (Coming Soon)",
      ],
      colorClass: "vip-card",
    },
  ];

  return (
    <section className="subscription-page">
      {/* === Hero Section === */}
      <div className="sub-hero">
        <div className="sub-text">
          <h1>The Servana Movement Begins Now</h1>
          <p>Choose your place in the movement and enjoy the care you deserve.</p>
          <div className="sub-cta-buttons">
            <button className="button-primary" onClick={handleComingSoon}>
              Start Membership
            </button>
          </div>
        </div>
      </div>

      {/* === User Plans === */}
      <div className="pricing-section">
        <h2>Flexible plans for every need and budget</h2>
        <h1>User Plan</h1>
        <div className="toggle-container">
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={isYearly} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>

        <div className="plans-container">
          {userPlans.map((plan, index) => (
        <div key={index} className={`plan-card ${plan.colorClass} ${plan.highlight ? "highlight" : ""}`}>

              <h3>{plan.title}</h3>
              <h2>
                {plan.monthly === "Free"
                  ? "Free"
                  : `Ksh${isYearly ? plan.yearly : plan.monthly}`}
                <span>
                  {plan.monthly !== "Free" &&
                    (isYearly ? " /year" : " /month")}
                </span>
              </h2>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* === Worker Plans === */}
      <div className="pricing-section worker-section">
        <h1>Servana Pro</h1>
        <p>Choose a plan that helps you grow your career</p>

        <div className="plans-container">
          {workerPlans.map((plan, index) => (
        <div key={index} className={`plan-card ${plan.colorClass} ${plan.highlight ? "highlight" : ""}`}>

              <h3>{plan.title}</h3>
              <h2>
                {plan.monthly === "Free"
                  ? "Free"
                  : `Ksh${isYearly ? plan.yearly : plan.monthly}`}
                <span>
                  {plan.monthly !== "Free" &&
                    (isYearly ? " /year" : " /month")}
                </span>
              </h2>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
