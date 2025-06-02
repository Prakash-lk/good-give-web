// src/components/HowToDonate.js
import React from 'react';
//import './HowToDonate.css'; // Optional CSS for styles

const HowToDonate = () => {
  return (
    <section className="how-to-donate">
      <div className="donate-container">
        <h2 className="donate-heading">How to Donate</h2>
        <p className="donate-description">
          Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem
          detraxit hosti et quidem <br /> se texit, ne ad respondendum
          reddidisti voluptates omittantur maiorum dolorum fuga.
        </p>

        <div className="donate-options">
          <div className="donate-card">
            <img
              src="/images/Donate.png"
              alt="Food Icon"
              className="donate-card-image"
            />
            <h3>Donate Non-Perishable Food Items</h3>
            <p>
              We accept a wide variety of non-perishable food <br />
              donations, including Canned goods (vegetables, <br />
              fruits, soups, beans, meats, etc.), Dry foods (rice, <br />
              cereal, lentils, flour, etc.), baby food, Cooking oil <br />
              and spices
            </p>
          </div>

          <div className="donate-card">
            <img
              src="/images/Box.png"
              alt="Box Icon"
              className="donate-card-image"
            />
            <h3>Choose the Box</h3>
            <p>
              If you'd prefer to donate by choosing the food item <br />
              that you want to donate, you can view the options <br />
              available in the *Food-box menu*, we will use <br />
              your contribution to purchase food and the same <br />
              combination of items will be consolidated in a Food- <br />
              box and the same will be delivered to one family.
            </p>
          </div>

          <div className="donate-card">
            <img
              src="/images/Dfinancially.png"
              alt="Donate Financially Icon"
              className="donate-card-image"
            />
            <h3>Donate Financially</h3>
            <p>
              If you'd prefer to donate money, we can use your <br />
              contribution to purchase food in bulk, maintain our <br />
              operations, and support our community outreach <br />
              programs. A small donation can go a long way in <br />
              providing essential meals to families in need.
            </p>
          </div>

          <div className="donate-card">
            <img
              src="/images/Host.png"
              alt="Food Drive Icon"
              className="donate-card-image"
            />
            <h3>Host a Food Drive</h3>
            <p>
              Consider organizing a food drive at your school, <br />
              workplace, or community center. We can provide <br />
              guidance on how to run an effective drive and <br />
              ensure your efforts support those who need it <br />
              most.
            </p>
          </div>
        </div>

        <button className="donate-now-button">Donate Now</button>
        <img
          src="/images/How-to-Donate- VectorBG.png"
          alt="Decorative"
          className="donate-corner-image"
        />
        <img
          src="/images/How to Donate BG@2x.png"
          alt="Right Decorative"
          className="donate-side-image-right"
        />
      </div>
    </section>
  );
};

export default HowToDonate;
