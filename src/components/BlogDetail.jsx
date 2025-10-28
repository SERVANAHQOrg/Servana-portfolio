import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/BlogDetail.css";
import UsafiImg from"../assets/safi.png"
import MbochImg from "../assets/awinja.svg"
import ListImg from "../assets/checklist.svg"
import { image } from "framer-motion/client";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles = {
    1: {
      title: "How to Hire a House Cleaner — The Servana Way",
      image:MbochImg,
      content: `
        <p>Your home deserves care, not compromise. Hiring a cleaner shouldn’t feel risky or confusing — it should feel <strong>safe, simple, and satisfying.</strong> Here’s how to do it the Servana Way.</p>

        <h3>1. Start with Trust</h3>
        <p>Every Servana cleaner is <strong>vetted, trained, and verified</strong> for professionalism and integrity. You’re not just inviting help into your home — you’re welcoming peace of mind.</p>

        <h3>2. Know What You Need</h3>
        <p>Choose from <strong>regular cleaning</strong>, <strong>deep cleaning</strong>, or <strong>move-in/out services</strong> — all tailored to your schedule. Servana makes it easy to match the right professional to your exact needs.</p>

        <h3>3. Communicate Clearly</h3>
        <p>Share your preferences before the visit — rooms to prioritize, products to use, or any personal touches. With Servana, communication is seamless and respectful.</p>

        <h3>4. Quality Meets Affordability</h3>
        <p>Transparent pricing, no surprises. You pay for genuine service, not hidden extras — because good work speaks for itself.</p>

        <h3>5. Experience the Servana Difference</h3>
        <p>A clean home is more than tidy floors — it’s balance, calm, and confidence. With Servana, every visit brings you closer to a home that feels cared for.</p>

        <h3>Servana — Where Care Lives</h3>
        <p>Hiring a cleaner has never been easier or more human. Book today and discover <strong>home care, the Servana Way.</strong></p>
      `,
    },
    2: {
      title: "10 Tips for Maintaining Your Home — The Servana Way",
      image: ListImg,
      content: `
        <p>Here are <strong>10 “Servana Way” tips</strong> for maintaining your home — reflecting Servana’s tone of <strong>care, reliability, simplicity, and empowerment.</strong></p>

        <h3>1. Care Begins with Consistency</h3>
        <p>A clean and organized home isn’t built in a day. Create a simple weekly schedule — light cleaning daily, deep cleaning on weekends — and let Servana help you stay consistent.</p>

        <h3>2. Trust the Right Hands</h3>
        <p>Always hire vetted professionals. Whether it’s plumbing, electrical, or beauty services, Servana ensures every expert is verified, skilled, and respectful of your space.</p>

        <h3>3. Prevent, Don’t Panic</h3>
        <p>Regular maintenance saves you stress and money. Schedule periodic appliance checks, plumbing inspections, and pest control — before small issues grow.</p>

        <h3>4. Beauty and Comfort Go Hand in Hand</h3>
        <p>Your home should reflect calm and confidence. From grooming yourself to polishing your space, Servana helps you feel good inside and out.</p>

        <h3>5. Safety is Sacred</h3>
        <p>Never compromise on safety. Keep electrical cords in order, ensure proper ventilation, and always book trusted Servana professionals for technical work.</p>

        <h3>6. Simplify Through Smart Tools</h3>
        <p>Use the Servana app to manage your bookings, track service history, and get reminders for recurring home tasks — all in one place.</p>

        <h3>7. Value the People Who Serve Your Space</h3>
        <p>Treat service professionals with kindness and respect. The Servana Way believes good energy flows both ways — from home to helper, and back.</p>

        <h3>8. Keep It Green, Keep It Clean</h3>
        <p>Choose eco-friendly cleaning options and sustainable products. Servana encourages mindful living that protects your home <em>and</em> the planet.</p>

        <h3>9. Celebrate Small Wins</h3>
        <p>Every freshly made bed, every fixed tap, every glowing floor — that’s progress. Take pride in your home’s journey, not just the destination.</p>

        <h3>10. Live Light, Live Lovely</h3>
        <p>A home maintained with love and balance brings peace. Declutter often, breathe freely, and let Servana make your life beautifully simple.</p>
      `,
    },
    3: {
      title: "Simple Tips for a Stress-Free Cleaning Routine — The Servana Way",
      image:UsafiImg,
      content: `
        <p>Cleaning doesn’t have to feel overwhelming. With the right rhythm and a little Servana wisdom, you can turn it into something light, easy, and even therapeutic.</p>

        <h3>1. Start Small, Stay Consistent</h3>
        <p>Don’t wait for a mess to pile up. Clean a little every day — five minutes of tidying each morning or evening keeps your space effortlessly fresh.</p>

        <h3>2. Follow a Simple Schedule</h3>
        <ul>
          <li>Monday – Laundry</li>
          <li>Tuesday – Kitchen</li>
          <li>Wednesday – Floors</li>
        </ul>
        <p>Consistency removes decision fatigue and keeps things manageable.</p>

        <h3>3. Make It Enjoyable</h3>
        <p>Play your favorite playlist or podcast while cleaning. When you pair chores with joy, they stop feeling like work.</p>

        <h3>4. Keep Supplies Handy</h3>
        <p>Store basic cleaning products in accessible spots — one set in the kitchen, another in the bathroom. Convenience saves time and mental effort.</p>

        <h3>5. Declutter as You Go</h3>
        <p>Less stuff means less stress. Each week, choose one area to simplify — a drawer, a shelf, or your wardrobe.</p>

        <h3>6. Share the Load</h3>
        <p>If you live with family or roommates, assign small tasks to everyone. Shared responsibility builds teamwork and lightens the load.</p>

        <h3>7. Use Servana for the Heavy Lifting</h3>
        <p>Deep cleaning, appliance care, or post-event tidying? Leave it to Servana’s vetted professionals. You handle life — we handle the mess.</p>

        <h3>8. Celebrate the Clean</h3>
        <p>Take a moment to enjoy your work — light a candle, open a window, breathe in the calm. A clean home feels like self-care.</p>

        <h3>The Servana Way</h3>
        <p>Cleaning isn’t just about spotless floors — it’s about peace, rhythm, and care. With Servana, home maintenance becomes lighter, easier, and beautifully stress-free.</p>
      `,
    },
  };

  const article = articles[id] || articles[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="blog-detail fade-in">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="blog-inner">
        <img src={article.image} alt={article.title} className="detail-image" />
        <div className="detail-text">
          <h1>{article.title}</h1>
          <p className="detail-date">{article.date}</p>
          <div
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
        </div>
      </div>
    </section>
  );
}
