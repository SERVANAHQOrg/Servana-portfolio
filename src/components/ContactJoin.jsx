// ContactJoin.jsx
import { useState } from "react";
import "../styles/ContactJoin.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactJoin() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks ${form.name}! We received your message.`);
    setForm({ name: "", email: "", message: "" });
  };


    const handleComingSoon = () => {
      toast.info("Coming soon!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
    };

  return (
    <section id="contact" className="contact-join">
      <h2>Contact Us / Join Us</h2>
      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name"
            value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email"
            value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" rows="5"
            value={form.message} onChange={handleChange} required />
          <button type="submit" className="send-btn">Send Message</button>
        </form>

        {/* Worker Signup CTA */}
        <div className="join-block">
          <h3>Become a Servana Pro</h3>
          <p>
            Skilled professional? Join Servana and grow your business with
            verified, trusted clients.
          </p>
          <button className="join-btn" onClick={handleComingSoon}>Join Servana Pro</button>
        </div>
      </div>

      {/* Sticky icons INSIDE the section */}
      <div className="quick-icons">
        <a href="https://wa.me/254715429924" aria-label="WhatsApp"><FaWhatsapp/></a>
        <a href="tel:+254715429924" aria-label="Phone"><FaPhoneAlt/></a>
        <a href="mailto:info@servana.com" aria-label="Email"><FaEnvelope/></a>
      </div>

      <ToastContainer />
    </section>
  );
}
