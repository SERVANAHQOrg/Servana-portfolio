import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReferralChallenge.css";
import PplImg from "../assets/people.svg";
import System from "../assets/system.svg";
import UserImg from "../assets/user.svg";
import TierImg from "../assets/tier2.svg";
import TeamImg from "../assets/team.svg";
import PlusImg from "../assets/share.svg";

export default function ReferralChallenge() {
  const navigate = useNavigate();

  const goToSubscriptions = () => {
    navigate("/subscriptions");
  };

  return (
    <section className="referral-page">
      {/* === HERO SECTION === */}
      <div className="referral-hero">
        <div className="ref-hero-content">
          <h1>The Servana Movement Begins Now</h1>
          <p>
            Join, refer friends, and unlock rewards — while empowering your
            community through trust and opportunity.
          </p>
          <button className="btn-primary" onClick={goToSubscriptions}>
            Choose Your Plan
          </button>
        </div>
        <img src={PplImg} alt="Referral illustration" className="ref-hero-img" />
      </div>

      {/* === REFER & EARN HEADER === */}
      <div className="referral-header">
        <h2>Refer & Earn</h2>
        <p>
          Bring others, earn rewards, and climb the movement tiers. Everyone wins.
        </p>
      </div>

      {/* === USER SIDE === */}
      <div className="tier-section">
        <h3 className="tier-header">User Side</h3>
        <p className="tier-subtext">
          Refer friends and unlock rewards as your circle grows.
        </p>
        <div className="tier-grid">
          <div className="tier-card highlight1">
            <img src={UserImg} alt="Home Hero" className="tier-icon" />
            <h4>The Connector</h4>
            <p className="tier-reward">Invite 3 friends</p>
            <p>1 Free Booking (any service, up to KES 1,000)</p>
            <p>
              "You're the spark! Share Servana with 3 people, and your next service
              is on us. That's what we call rewarding care."
            </p>
            <h5>Friends must each complete 1 booking</h5>
            <h5>Ideal for first time referrers</h5>
          </div>

          <div className="tier-card highlight2">
            <img src={TierImg} alt="Home Hero" className="tier-icon" />
            <h4>The Ambassador</h4>
            <p className="tier-reward">Invite 6 friends</p>
            <p>KES 500 OFF your next booking</p>
            <p>
              "You've got the influence. You're the reason homes feel lighter. Take
              KES 500 off, because you earned it."
            </p>
            <h5>Applies once Tier 1 is cleared</h5>
            <h5>Bonus: All 6 must book services</h5>
          </div>

          <div className="tier-card highlight3">
            <img src={PplImg} alt="Home Hero" className="tier-icon" />
            <h4>The Champion</h4>
            <p className="tier-reward">Invite 10 friends</p>
            <p>Lifetime VIP Badge + Permanent Perks</p>
            <p>
              “You didn’t just share an app — you started a movement. You’re now a
              Servana Champion for life.”
            </p>
            <h5>
              Your VIP Perks:
              <ul>
               <li>10% OFF all bookings – forever</li>
               <li>VIP Badge on your profile</li>
               <li>Birthday surprise every year</li>
               <li>First to test new features</li>
               <li>Promotions only for Champions</li>
              </ul>
            </h5>
          </div>
        </div>
      </div>

      {/* === SERVANA-PRO SIDE === */}
      <div className="tier-section">
        <h3 className="tier-header">Servana-Pro</h3>
        <p className="tier-subtext">
          Empower fellow professionals and earn as your network expands.
        </p>
        <div className="tier-grid">
          <div className="tier-card highlight1">
            <img src={TeamImg} alt="Home Hero" className="tier-icon" />
            <h4>The Hustler</h4>
            <p className="tier-reward">Refer 3 Verified Professionals</p>
            <p>KES 500 + Free Airtime Bundle (KES 100)</p>
            <h5>Each must complete 3 jobs successfully</h5>
            <h5>Fast reward for getting active, trusted pros onboard</h5>
          </div>

          <div className="tier-card highlight2">
            <img src={PlusImg} alt="Home Hero" className="tier-icon" />
            <h4>The Builder</h4>
            <p className="tier-reward">Refer 6 Verified Professionals</p>
            <p>
              KES 1,000 + Verified Badge
              <br />
              Plus: Unlock the Verified Pro Badge + Job priority for 7 days
              <br />
              Build your network and rise in visibility
            </p>
            <h5>Each must complete 5 jobs with 4.5★+ average rating</h5>
          </div>

          <div className="tier-card highlight3">
            <img src={PplImg} alt="Home Hero" className="tier-icon" />
            <h4>The Servana Champion</h4>
            <p className="tier-reward">Refer 10 Verified Professionals</p>
            <p>KES 5,000 + Lifetime Servana Elite Badge</p>
            <h5>They must complete a combined 100+ jobs</h5>
            <h5>
              Elite Badge Benefits:
              <ul>
                <li>Priority access to high-paying jobs</li>
                <li>Custom "Elite" Uniform upgrade</li>
                <li>Top listing in worker search</li>
                <li>Special bonuses during campaigns</li>
                <li>Access to Servana development & training programs</li>
                </ul>
            </h5>
          </div>
        </div>
      </div>

      {/* === REFERRAL CODE SYSTEM === */}
      <div className="ref-system">
        <img src={System} alt="Referral code system" />
        <div>
          <h3>Referral Code System</h3>
          <p>
            Every user gets a unique code that’s easy to copy and share. Apply it
            during signup or from your profile.
          </p>
          <p>
            Our dashboard tracks your milestones and prevents fraud with smart
            validation.
          </p>
        </div>
      </div>

      {/* === CTA BANNER === */}
      <div className="cta-banner">
        <h2>
          Servana isn’t just an app — it’s a movement of families, workers, and
          neighbors caring for what matters most.
        </h2>
        <button className="btn-secondary" onClick={goToSubscriptions}>
          Start Your Membership
        </button>
      </div>
    </section>
  );
}
