import { Link } from "react-router-dom";
import "../styles/ReferralPromo.css";

export default function ReferralPromo() {
  return (
    <section className="referral-promo">
      <h2>Did you know?</h2>
      <p>Refer a friend and earn rewards!</p>
      <Link to="/referral" className="referral-btn">
        Refer a Friend
      </Link>
    </section>
  );
}
