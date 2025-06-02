import React, { useState } from 'react'; // ← import useState
import './DonationModal.css';

const DonationModal = ({ onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(null); // ← state to track selection

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const amounts = [50000, 25000, 10000, 5000, 2500, 1000];

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">🔒 Secure Donation</h2>

        <div className="donation-options">
          <label><input type="radio" name="region" defaultChecked /> Indian</label>
          <label><input type="radio" name="region" /> Foreign</label>
        </div>

        <div className="give-once-label">Give Once</div>
        <p className="give-once-desc">Please select your donation amount (*1meal ₹25/-)</p>

        <div className="modal-image">
          <img src="/images/basket.png" alt="Basket" />
        </div>

        <h3>₹{selectedAmount?.toLocaleString() || '25,000'}</h3>
        <p>1,000 meals</p>

        <div className="amount-buttons">
          {amounts.map((amt) => (
            <button
              key={amt}
              onClick={() => handleAmountClick(amt)}
              className={selectedAmount === amt ? 'selected' : ''}
            >
              ₹{amt.toLocaleString()}
            </button>
          ))}
        </div>

        <input type="text" className="custom-amount" placeholder="Enter Amount" />

        <div className="payment-icons">
          <p>We accept all major payment methods</p>
        </div>

        <button className="donate-action-btn">Proceed to Donate</button>
        <p className="tax-note">
          <img src="/images/info.png" alt="info" className="info-img" />
          Donations are tax exempted under 80G
        </p>
      </div>
    </div>
  );
};

export default DonationModal;
