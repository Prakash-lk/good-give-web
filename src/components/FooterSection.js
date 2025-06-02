// src/components/FooterSection.js
import React from 'react';
//import './FooterSection.css'; // Optional: for section-specific styles

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <div className="logo-with-name">
            <img
              src="/images/Good Give Fotter Logo.png"
              alt="Goodgive Logo"
              className="footer-logo"
            />
            <h1 className="footer-brand-name">Goodgive</h1>
          </div>

          <h2>Together, We Can End Hunger</h2>
          <p className="footer-highlight">Thank you for visiting Good-give.com</p>
          <p>
            Your support—whether it’s through donating food, time, or <br />
            funds—makes a real impact on the lives of those who need it <br />
            most. Join us today and be part of the movement to end <br />
            hunger in our community. Every donation, no matter how <br />
            small, brings us closer to a world where no one goes hungry.
          </p>
          <div className="footer-buttons">
            <button className="donate-btn">Donate Now</button>
            <button className="volunteer-btn">Signup to Volunteer</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>
            We’d love to hear from you! Whether you have <br />
            questions, want to donate, or are interested in <br />
            volunteering, don’t hesitate to get in touch.
          </p>
          <p>
            Phone: <strong>+91-7667991280</strong>
          </p>
          <p>
            Email: <strong>donate@goodgive.com</strong>
          </p>
          <p>
            Address: <strong>YMCA, Chennai-600091</strong>
          </p>

          <p className="follow-label">Follow Us:</p>
          <div className="social-icons">
            <a href="#" className="facebook-logo">
              <img
                src="/images/FB.png"
                alt="facebook Logo"
                className="fb-logo-image"
              />
            </a>
            <a href="#" className="x-logo">
              <img
                src="/images/Twitter.png"
                alt="X Logo"
                className="x-logo-image"
              />
            </a>
            <a href="#" className="Insta-logo">
              <img
                src="/images/Insta.png"
                alt="Insta Logo"
                className="insta-logo-image"
              />
            </a>
            <a href="#" className="linkedin-logo">
              <img
                src="/images/Linknden.png"
                alt="linkedin Logo"
                className="linkedin-logo-image"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-image">
        <img
          src="/images/Footer Image@2x.png"
          alt="Footer Image"
          className="footer-img"
        />
      </div>
    </section>
  );
};

export default FooterSection;
