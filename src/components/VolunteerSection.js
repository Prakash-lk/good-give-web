// src/components/VolunteerSection.js
import React from 'react';
//import './VolunteerSection.css'; // Optional: if using separate CSS

const VolunteerSection = () => {
  return (
    <section className="volunteer-section">
      <img
        src="/images/Becoming a Volunteer Left BG@2x.png"
        alt="Left Decor"
        className="side-image left-side"
      />

      <div className="volunteer-box">
        <img
          src="/images/Becoming a Volunteer of Goodgive Bg@2x.png"
          alt="Background"
          className="volunteer-background-image"
        />
        <div className="volunteer-content">
          <div className="volunteer-avatars">
            <div className="avatar-stack">
              <img src="/images/AshaΓÇÖs Story@2x.png" alt="User 1" />
              <img src="/images/Pinto's Story@2x.png" alt="User 2" />
              <img src="/images/Anand Story@2x.png" alt="User 3" />
              <img src="/images/AshaΓÇÖs Story@2x.png" alt="User 4" />
              <div className="avatar-badge">100+</div>
            </div>
          </div>
          <h2>
            Becoming a Volunteer <br /> of Goodgive
          </h2>
          <button className="register-btn">Register Now</button>
        </div>

        <div className="volunteer-image">
          <img
            src="/images/Becoming a Volunteer of Goodgive People@2x.png"
            alt="Volunteers"
          />
        </div>
      </div>

      <img
        src="/images/Becoming a Volunteer Right BG @2x.png"
        alt="Right Decor"
        className="side-image right-side"
      />
    </section>
  );
};

export default VolunteerSection;
