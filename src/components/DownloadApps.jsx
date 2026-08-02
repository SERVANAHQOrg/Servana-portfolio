import { useState, useEffect } from "react";
import "../styles/DownloadApps.css";
import PhoneShowcase from "../components/PhoneShowcase";
import AppInfo from "../components/AppInfo";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaArrowDown
} from "react-icons/fa";

import c1 from "../assets/customer/home.jpeg";
import c2 from "../assets/customer/services.jpeg";
import c3 from "../assets/customer/booking.jpeg";
import c4 from "../assets/customer/payments.jpeg";
import c5 from "../assets/customer/profile.jpeg";

import w1 from "../assets/worker/dashboard.jpeg";
import w2 from "../assets/worker/jobs.jpeg";
import w3 from "../assets/worker/job-details.jpeg";
import w4 from "../assets/worker/earnings.jpeg";
import w5 from "../assets/worker/profile.jpeg";

export default function DownloadApps() {

    const customerScreens = [
    c1,
    c2,
    c3,
    c4,
    c5,
];

const workerScreens = [
    w1,
    w2,
    w3,
    w4,
    w5,
];

const [customerFront, setCustomerFront] = useState(0);
const [customerBack, setCustomerBack] = useState(1);

const [workerFront, setWorkerFront] = useState(0);
const [workerBack, setWorkerBack] = useState(1);

useEffect(() => {

  const timer = setInterval(() => {

    setCustomerFront(prev => (prev + 1) % customerScreens.length);

setTimeout(() => {
    setCustomerBack(prev => (prev + 1) % customerScreens.length);
}, 250);



       setWorkerFront(prev => (prev + 1) % workerScreens.length);

setTimeout(() => {
     setWorkerBack(prev => (prev + 1) % workerScreens.length);
}, 250);

  }, 3500);

  return () => clearInterval(timer);

}, []);

  return (
    <section className="downloads" id="downloads">
      <div className="downloads-container">

        {/* ================= HEADER ================= */}

        <div className="downloads-header">

          <span className="section-tag">
            SERVANA APPS
          </span>

          <h2>
            Choose the <span>right app</span> for you
          </h2>

          <p>
            Whether you're looking for trusted home services or you're
            a professional ready to grow your business, Servana has an
            app built for you.
          </p>

        </div>

        {/* ================= APP CARDS ================= */}


<div className="apps-showcase">

  {/* USER APP */}

  <motion.section
  className="app-section"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>

  <div className="app-left">
    <PhoneShowcase
      frontImage={customerScreens[customerFront]}
      backImage={customerScreens[customerBack]}
      theme="green"
    />
  </div>

  <div className="app-right">
    <AppInfo
      badge="Servana User App"
      badgeColor="green"
      title="Book Trusted Professionals"
      description="Find reliable professionals, schedule appointments, make secure payments and track every booking."
      features={[
        "Book Services",
        "Live Tracking",
        "Secure Payments",
        "Booking History",
      ]}
    />
  </div>

</motion.section>


  {/* WORKER APP */}

  <motion.section
  className="app-section"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>

  <div className="app-left">
    <AppInfo
      badge="Servana Pro App"
      badgeColor="black"
      title="Grow Your Business"
      description="Receive nearby jobs, manage your availability, communicate with customers and track your earnings."
      features={[
        "Accept Jobs",
        "Manage Schedule",
        "Earnings Dashboard",
        "Availability Control",
      ]}
    />
  </div>

  <div className="app-right">
    <PhoneShowcase
      frontImage={workerScreens[workerFront]}
      backImage={workerScreens[workerBack]}
      theme="black"
    />
  </div>

</motion.section>

</div>

</div>

        {/* ================= INSTALLATION ================= */}

   {/* Installation */}
        <div className="install-section">

          <h2>First Time Installing?</h2>

          <p>
            Follow these quick steps to get started.
          </p>

          <div className="install-grid">

            <div className="install-card">

              <FaAndroid className="install-icon" />

              <h3>Android</h3>

              <div className="steps">

                <div className="step">
                  <span>1</span>
                  <p>Download the APK.</p>
                </div>

                <div className="step">
                  <span>2</span>
                  <p>If prompted a Warning!, tap <strong>Settings</strong>.</p>
                </div>

                <div className="step">
                  <span>3</span>
                  <p>Enable <strong>Allow from this source</strong>.</p>
                </div>

                <div className="step">
                  <span>4</span>
                  <p>Return and complete the installation.</p>
                </div>

              </div>

            </div>

            <div className="install-card">

              <FaApple className="install-icon" />

              <h3>iPhone</h3>

              <div className="steps">

                <div className="step">
                  <FaArrowDown />
                  <p>Download the iPhone version.</p>
                </div>

                <div className="step">
                  <FaArrowDown />
                  <p>Follow the installation instructions shown.</p>
                </div>

                <div className="step">
                  <FaArrowDown />
                  <p>
                    Depending on the distribution method, additional verification
                    may be required before opening the app.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="downloads-footer">

          <p>
            Every Servana app is securely built and verified before release.
            Always download from the official Servana website.
          </p>

        </div>

    </section>
  );
}