import React, { useState } from "react";
import "../styles/ReferralChallenge.css";
import ReferralImg from "../assets/referral.png";

function HoverAccordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`hover-accordion ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="accordion-title">{title}</div>
      <div className="accordion-body">{children}</div>
    </div>
  );
}

export default function ReferralChallenge() {
  return (
    <div className="referral-two-col">
      {/* ===== LEFT: Image/Illustration ===== */}
      <aside className="image-col">
        <img src= {ReferralImg} alt="Servana Referral Illustration" />
      </aside>

      {/* ===== RIGHT: Accordions ===== */}
      <section className="accordion-col">
        <HoverAccordion title="Servana User Side – Referral Challenge">
          <p><strong>Goal:</strong> Encourage homeowners/customers to invite friends to use Servana for a reward.</p>
          <h4>Tier 1 – The Connector</h4>
          <ul>
            <li>Invite 3 Friends</li>
            <li>Reward: 1 Free Booking (any service, up to KES 1,000)</li>
            <li>Friends must each complete 1 booking</li>
            <li>“You’re the spark! Share Servana with 3 people, and your next service is on us.”</li>
          </ul>

          <h4>Tier 2 – The Ambassador</h4>
          <ul>
            <li>Invite 6 Friends (after Tier 1)</li>
            <li>Reward: KES 500 OFF next booking</li>
            <li>All 6 must book services</li>
          </ul>

          <h4>Tier 3 – The Champion</h4>
          <ul>
            <li>Invite 10 Friends → they complete 50 bookings</li>
            <li>Reward: Lifetime VIP Badge + Perks:
              10% OFF forever, VIP Badge, Birthday surprise,
              Early feature access, Secret promotions</li>
            <li>How to Join: Open Servana App → Referral Challenge → Share code → Track rewards live</li>
          </ul>
        </HoverAccordion>

        <HoverAccordion title="Servana Pro – Worker Referral Challenge">
          <p><strong>Goal:</strong> Motivate workers to refer trusted friends/professionals and grow Servana’s network.</p>
          <h4>Tier 1 – The Hustler</h4>
          <ul>
            <li>Refer 3 Verified Workers</li>
            <li>Each completes 3 jobs</li>
            <li>Reward: KES 500 cash bonus + Free Airtime (KES 100)</li>
          </ul>

          <h4>Tier 2 – The Builder</h4>
          <ul>
            <li>Refer 6 Verified Workers (5 jobs each, 4.5★+ rating)</li>
            <li>Reward: KES 1,000 bonus + Verified Pro Badge + 7-day job priority</li>
          </ul>

          <h4>Tier 3 – The Servana Champion</h4>
          <ul>
            <li>Refer 10 Verified Workers completing 100+ jobs combined</li>
            <li>Reward: KES 5,000 cash + Lifetime Servana Elite Badge</li>
            <li>Elite Badge perks: priority access to high-paying jobs, custom uniform, top listing, special bonuses, training access</li>
          </ul>
          <p>How to Refer: Share your Servana Pro Code (e.g., PROSTEPH123); referrals must register, verify, and get active. Track rewards in the Referral Tracker.</p>
        </HoverAccordion>

        <HoverAccordion title="How the Referral Code System Works">
          <h4>1. Getting a Code</h4>
          <ul>
            <li>Auto-generated on registration</li>
            <li>Shown on Referral Challenge Page and Profile → Referral & Rewards</li>
            <li>Includes Copy, Share and Track buttons</li>
          </ul>
          <h4>2. Code Entry</h4>
          <ul>
            <li>Enter during sign-up or later in Profile → Apply Code (within 24–48 hrs)</li>
          </ul>
          <h4>3. Admin Tracking</h4>
          <ul>
            <li>Admin Dashboard → Referrals Section with referrer, referee, milestones, fraud flags, real-time analytics</li>
          </ul>
          <h4>4. Security & Abuse Prevention</h4>
          <ul>
            <li>One-time use per new user</li>
            <li>Unique, non-guessable codes</li>
            <li>Fraud detection and manual review for suspicious activity</li>
            <li>Rewards triggered only after valid actions (e.g., 3 bookings)</li>
          </ul>
        </HoverAccordion>

        <HoverAccordion title="User Journey & Referral Flow">
          <ul>
            <li>Referrer: Find & share code – Referral Challenge / Profile</li>
            <li>New User: Apply code – Sign-Up / Profile Option</li>
            <li>Admin: Manage referrals – Admin Dashboard → Referrals Tab</li>
          </ul>
          <p>
            Flow: Referrer shares code → New user signs up with code or referral link →
            System validates → Dashboard updates and rewards apply when bookings complete.
          </p>
        </HoverAccordion>
      </section>
    </div>
  );
}
