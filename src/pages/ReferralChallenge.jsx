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
  <img src={UserImg} alt="" className="tier-icon" />

  <span className="tier-badge starter">Starter</span>
  <h4>The Connector</h4>
  <p className="tier-hook">Your first step into the Servana movement</p>

  <ul className="tier-benefits">
    <li>1 Free Booking (up to KES 1,000)</li>
  </ul>

    <blockquote className="tier-quote">
    “You’re the spark — your next service is on us.”
  </blockquote>

  <div className="tier-requirements">
    <strong>Requirements</strong>
    <p>Invite 3 friends</p>
    <p>Each completes 1 booking</p>
  </div>
</div>


<div className="tier-card highlight2">
  <img src={TierImg} alt="" className="tier-icon" />

  <span className="tier-badge popular">Most Popular</span>
  <h4>The Ambassador</h4>
  <p className="tier-hook">Influence that earns real rewards</p>

  <ul className="tier-benefits">
    <li>KES 500 OFF your next booking</li>
  </ul>

      <blockquote className="tier-quote">
    “You’ve got the influence and now homes feel lighter.”
  </blockquote>

  <div className="tier-requirements">
    <strong>Requirements</strong>
    <p>Invite 6 friends</p>
    <p>All must complete bookings</p>
    <p>Tier 1 must be completed first</p>
  </div>
</div>


<div className="tier-card highlight3 featured">
  <img src={PplImg} alt="" className="tier-icon" />

  <span className="tier-badge elite">Elite</span>
  <h4>The Champion</h4>
  <p className="tier-hook">Lifetime VIP status & permanent perks</p>

  <ul className="tier-benefits">
    <li>10% OFF all bookings — forever</li>
    <li>Lifetime VIP profile badge</li>
    <li>Birthday reward every year</li>
    <li>Early access to new features</li>
    <li>Exclusive Champion promotions</li>
  </ul>

      <blockquote className="tier-quote">
    "A movement started with you.”
  </blockquote>

  <div className="tier-requirements">
    <strong>Requirements</strong>
    <p>Invite 10 friends</p>
    <p>Each completes 1 booking</p>
  </div>
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
  <img src={TeamImg} alt="" className="tier-icon" />

  <span className="tier-badge starter">Starter</span>
  <h4>The Hustler</h4>
  <p className="tier-hook">Fast rewards for active referrals</p>

  <ul className="tier-benefits">
    <li>KES 500 cash reward</li>
    <li>Free Airtime Bundle (KES 100)</li>
  </ul>

  <div className="tier-requirements">
    <strong>Requirements</strong>
    <p>Refer 3 verified professionals</p>
    <p>Each completes 3 successful jobs</p>
  </div>
</div>


<div className="tier-card highlight2">
  <img src={PlusImg} alt="" className="tier-icon" />

  <span className="tier-badge popular">Growth</span>
  <h4>The Builder</h4>
  <p className="tier-hook">Build reputation and visibility</p>

  <ul className="tier-benefits">
    <li>KES 1,000 reward</li>
    <li>Verified Pro Badge</li>
    <li>Job priority for 7 days</li>
  </ul>

  <div className="tier-requirements">
    <strong>Requirements</strong>
    <p>Refer 6 verified professionals</p>
    <p>Each completes 5 jobs</p>
    <p>4.5★+ average rating</p>
  </div>
</div>


<div className="tier-card highlight3 featured">
  <img src={PplImg} alt="" className="tier-icon" />

  <span className="tier-badge elite">Elite</span>
  <h4>The Servana Champion</h4>
  <p className="tier-hook">Top-tier recognition & earnings power</p>

  <ul className="tier-benefits">
    <li>KES 5,000 cash reward</li>
    <li>Lifetime Servana Elite Badge</li>
    <li>Priority access to high-paying jobs</li>
    <li>Top listing in worker search</li>
    <li>Training & development access</li>
  </ul>

  <div className="tier-requirements">
    <strong>Requirements</strong>
    <p>Refer 10 verified professionals</p>
    <p>Combined 100+ completed jobs</p>
  </div>
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
