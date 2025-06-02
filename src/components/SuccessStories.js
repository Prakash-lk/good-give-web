// src/components/SuccessStories.js
import React from 'react';
//import './SuccessStories.css'; // Optional if you want to use a separate CSS file

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <div className="success-container">
        <h2 className="success-heading">Success Stories</h2>
        <p className="success-description">
          Your donations and support help change lives. Here are just a few
          stories of <br /> individuals whose lives have been touched by our
          work:
        </p>

        <div className="success-carousel">
          <img
            src="/images/Success Stories BG@2x.png"
            alt="Background"
            className="carousel-bg"
          />

          <button className="carousel-arrow left">&#10094;</button>

          <div className="story-card lower-card">
            <img
              src="/images/AshaΓÇÖs Story@2x.png"
              alt="Asha"
              className="story-avatar"
            />
            <h3>Asha’s Story</h3>
            <div className="quote">
              <img
                src="/images/Quote1,3.png"
                alt="Quote"
                className="quote-img"
              />
            </div>
            <p>
              I never thought I’d need help, but when I lost my job and faced
              eviction, Good-give provided us with food and connected us to
              other resources. Thanks to them, we’re starting to rebuild our
              lives.
            </p>
          </div>

          <div className="story-card featured">
            <img
              src="/images/Pinto's Story@2x.png"
              alt="Pinto"
              className="story-avatar"
            />
            <h3>Pinto’s Story</h3>
            <div className="quote">
              <img
                src="/images/Quote2.png"
                alt="Quote"
                className="quote-img"
              />
            </div>
            <p>
              I lost my job during the pandemic and was struggling to feed my
              children. Good-give provided us with nutritious meals every
              month, which gave me one less thing to worry about. I am so
              grateful for your support.
            </p>
          </div>

          <div className="story-card lower-card">
            <img
              src="/images/Anand Story@2x.png"
              alt="Anand"
              className="story-avatar"
            />
            <h3>Anand’s Story</h3>
            <div className="quote">
              <img
                src="/images/Quote1,3.png"
                alt="Quote"
                className="quote-img"
              />
            </div>
            <p>
              When my father became ill, I had to take time off work to care
              for him. The food I received from the food bank allowed me to
              focus on his recovery without the stress of how to feed my
              family.
            </p>
          </div>

          <button className="carousel-arrow right">&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
