// src/components/CoreValues.js
import React from 'react';
//import './CoreValues.css'; // Optional CSS file for custom styling

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <h2>Our core values</h2>
      <p>
        Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem
        detraxit hosti et quidem se texit, ne ad respondendum reddidisti
        voluptates omittantur maiorum dolorum fuga.
      </p>

      <div className="core-values-grid">
        <div className="value-card">
          <img
            src="/images/compassion-icon.png"
            alt="Compassion"
            className="value-icon"
          />
          <h3>Compassion</h3>
          <p>
            We work with empathy and kindness to meet the immediate and
            long-term needs of our neighbors.
          </p>
        </div>
        <div className="value-card">
          <img
            src="/images/integrity-icon.png"
            alt="Integrity"
            className="value-icon"
          />
          <h3>Integrity</h3>
          <p>
            We are committed to transparency, accountability, and ethical
            practices in everything we do.
          </p>
        </div>
        <div className="value-card">
          <img
            src="/images/sustainability-icon.png"
            alt="Sustainability"
            className="value-icon"
          />
          <h3>Sustainability</h3>
          <p>
            We focus on reducing food waste and finding sustainable solutions
            to hunger.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
