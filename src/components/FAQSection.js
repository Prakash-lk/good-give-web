// src/components/FAQSection.js
import React from 'react';
//import './FAQSection.css'; // Optional: if you have section-specific styles

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently-Asked Questions</h2>

        <div className="faq-box">
          <div className="faq-item">
            <div className="faq-question">
              Omne animal, simul atque haec subtilius velint tradere et rationibus.
              <span className="faq-icon">+</span>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              Torquatos nostros? quos tu tam egregios viros censes aut officiis.
              <span className="faq-icon">+</span>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              Si sine causa? quae fuerit causa, mox videro; interea hoc.
              <span className="faq-icon">+</span>
            </div>
          </div>

          <div className="faq-item open">
            <div className="faq-question">
              Sed ut calere ignem, nivem esse vult, summumque malum et.
              <span className="faq-icon">−</span>
            </div>
            <div className="faq-answer">
              At vero eos censes aut quid percipit aut rerum facilis.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              Epicurus in ea voluptate ponit, quod summum malum dolorem, idque.
              <span className="faq-icon">+</span>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              Tum dicere exorsus est laborum et voluptatem ut perspiciatis, unde.
              <span className="faq-icon">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
