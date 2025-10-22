import { useState } from "react";
import "../styles/Legal.css";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("terms");

  const renderContent = () => {
    switch (activeTab) {
      case "terms":
        return (
          <>
            <h2>Terms of Service (TOS)</h2>
            <p><strong>Introduction</strong> — Servana Limited (“Servana”, “we”, “our”, “us”) operates the Servana mobile app and website. By accessing or using our platform, you agree to these Terms of Service. These Terms apply to both service seekers (“Clients”) and service providers (“Professionals”).</p>
            <p><strong>Eligibility</strong> — Users must be at least 18 years old. Professionals must have valid identification and meet Servana’s vetting requirements.</p>
            <p><strong>Scope of Service</strong> — Servana connects Clients to verified Professionals for home and personal services. Servana does not directly employ service providers.</p>
            <p><strong>Payments</strong> — Payments are processed through approved Servana channels (M-PESA PayBill, Card, or Wallet). Servana may retain a commission per booking as disclosed on the platform.</p>
            <p><strong>Limitation of Liability</strong> — Servana acts as an intermediary and is not responsible for injury, property damage, or losses arising from service engagements.</p>
            <p><strong>Governing Law</strong> — These Terms are governed by the laws of Kenya.</p>
          </>
        );

      case "privacy":
        return (
          <>
            <h2>Privacy Policy</h2>
            <p><strong>Information We Collect</strong> — Personal data such as name, phone number, ID, email, and address. Usage data includes device type, IP, and app activity.</p>
            <p><strong>How We Use Information</strong> — To improve services, verify identities, and communicate with users.</p>
            <p><strong>Data Security</strong> — We use encryption and secure storage to protect user data. Servana complies with Kenya’s Data Protection Act (2019).</p>
            <p><strong>User Rights</strong> — You may request to access, correct, or delete your information, or opt out of marketing.</p>
            <p><strong>Contact</strong> — For privacy concerns, email <a href="mailto:privacy@servana.africa">privacy@servana.africa</a>.</p>
          </>
        );

      case "cookies":
        return (
          <>
            <h2>Cookie Policy</h2>
            <p><strong>What Are Cookies?</strong> — Cookies are small text files stored in your browser to improve experience and analytics.</p>
            <p><strong>Types of Cookies</strong> — Essential, Performance, Functional, and Advertising cookies are used to enhance usability and measure engagement.</p>
            <p><strong>Managing Cookies</strong> — You can modify cookie settings via your browser. Disabling some cookies may affect functionality.</p>
            <p><strong>Consent</strong> — Continued use of Servana’s website constitutes cookie consent.</p>
          </>
        );

      case "providers":
        return (
          <>
            <h2>Service Provider Agreement</h2>
            <p><strong>Engagement</strong> — Professionals are independent contractors, not employees. Servana connects them with clients through its platform.</p>
            <p><strong>Obligations</strong> — Providers must deliver services ethically, maintain valid identification, and follow Servana’s Code of Conduct.</p>
            <p><strong>Fees & Payments</strong> — Servana charges a commission or subscription per booking, processed through Servana Wallet or PayBill.</p>
            <p><strong>Confidentiality</strong> — Providers must protect client information and not solicit outside Servana’s platform.</p>
            <p><strong>Liability</strong> — Providers are responsible for their conduct and damages. Disputes are handled via Servana Support or mediation.</p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="legal-container">
      <h1 className="legal-title">Servana Legal Center</h1>
      <p className="legal-subtitle">Your trust and transparency matter to us.</p>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "terms" ? "tab active" : "tab"}
          onClick={() => setActiveTab("terms")}
        >
          Terms of Service
        </button>
        <button
          className={activeTab === "privacy" ? "tab active" : "tab"}
          onClick={() => setActiveTab("privacy")}
        >
          Privacy Policy
        </button>
        <button
          className={activeTab === "cookies" ? "tab active" : "tab"}
          onClick={() => setActiveTab("cookies")}
        >
          Cookie Policy
        </button>
        <button
          className={activeTab === "providers" ? "tab active" : "tab"}
          onClick={() => setActiveTab("providers")}
        >
          Provider Agreement
        </button>
      </div>

      {/* Content */}
      <div className="legal-content">{renderContent()}</div>
    </div>
  );
}
