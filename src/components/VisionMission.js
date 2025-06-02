// src/components/VisionMission.js
import React from 'react';
//import './VisionMission.css'; // Optional: for custom styles

const VisionMission = () => {
  return (
    <section className="vision-mission-section relative">
      <div className="vision-text">
        <h2>Our Vision</h2>
        <p>
          A hunger-free world where every individual has access to the <br />
          food they need to thrive. We envision a world where food <br />
          insecurity is a thing of the past, and where communities <br />
          work together to support and care for one another.
        </p>
        <a href="#" className="read-more">
          READ MORE
        </a>
      </div>

      <div className="vision-image">
        <img src="/images/Our Vision@2x.png" alt="Vision" />
      </div>

      <div className="mission-image">
        <img src="/images/Our Mission@2x.png" alt="Mission" />
      </div>

      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide nutritious, non-perishable <br />
          food to individuals and families in need. We strive to <br />
          reduce food waste, promote sustainability, and support <br />
          long-term solutions to hunger, ensuring that everyone can <br />
          lead healthy, productive lives.
        </p>
        <a href="#" className="read-more">
          READ MORE
        </a>
      </div>

      <div className="decorative-bottom-left">
        <img
          src="/images/Our Vision Our Mission BG@2x.png"
          alt="Decorative Element"
        />
      </div>
    </section>
  );
};

export default VisionMission;
