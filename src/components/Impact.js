// src/components/Impact.js
import React from 'react';
//import './Impact.css'; // Optional: create this CSS file for custom styles

const Impact = () => {
  return (
    <section className="impact-section">
      <img
        src="/images/our-impact-bg-2x.png"
        alt="Impact background"
        className="impact-background"
      />
      <div className="impact-content">
        <h2>Our Impact So Far</h2>
        <p className="impact-subtitle">
          We are proud of the work we've done and the lives we've touched, but
          we know there is still much to be done.
        </p>

        <div className="impact-stats">
          <div className="stat-block">
            <h3>20000+</h3>
            <p className="stat-title">Meals Served</p>
            <p className="stat-desc">
              Meals served to individuals <br /> and families in need
            </p>
          </div>
          <div className="stat-block">
            <h3>5000+</h3>
            <p className="stat-title">Food Distributed</p>
            <p className="stat-desc">
              Packets of non-persiable food <br /> distributed.
            </p>
          </div>
          <div className="stat-block">
            <h3>1000+</h3>
            <p className="stat-title">Families Assisted</p>
            <p className="stat-desc">
              Families supported with <br /> regular food distributions.
            </p>
          </div>
          <div className="stat-block">
            <h3>50+</h3>
            <p className="stat-title">Volunteers Engaged</p>
            <p className="stat-desc">
              Volunteers helping us make a <br /> difference
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
