// src/components/Hero.js
import React, { useState } from 'react';
import DonationModal from '../components1/DonationModal';
import VolunteerModal from '../components1/VolunteerModal';

const Hero = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            Fight Against <br /> Hunger Donating <br />
            <span className="highlight-blue">Food Today</span>
          </h1>
          <p>
            Your donation can help provide food to <br /> people who are
            struggling to feed <br /> themselves and their families
          </p>
          <div className="hero-buttons">
            <button className="donate-btn" onClick={() => setShowDonateModal(true)}>Donate Now</button>
            <button className="volunteer-btn" onClick={() => setShowVolunteerModal(true)}>Register as Volunteer</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-stack">
            <img
              src="/images/Landing Page BG@2x.png"
              alt="Background"
              className="bg-image"
            />
            <img
              src="/images/import1.png"
              alt="Foreground"
              className="main-image"
            />
          </div>
        </div>
      </section>

      {showDonateModal && <DonationModal onClose={() => setShowDonateModal(false)} />}
      {showVolunteerModal && <VolunteerModal onClose={() => setShowVolunteerModal(false)} />}
    </>
  );
};

export default Hero;
