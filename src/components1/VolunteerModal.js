// src/components1/VolunteerModal.js
import React from 'react';
import './VolunteerModal.css'; // You'll style the modal here

const VolunteerModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="volunteer-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">🙌 Volunteer Sign up</h2>
        <p className="modal-subtitle">Come volunteer with us to help our local community!</p>

        <form className="volunteer-form">
            <p className="section-label">Volunteer Details</p>
          <div className="form-group">
  <div className="floating-label">
    <input type="text" id="firstName" required />
    <label htmlFor="firstName">First Name</label>
  </div>
  <div className="floating-label">
    <input type="text" id="lastName" required />
    <label htmlFor="lastName">Last Name</label>
  </div>
</div>
<div className="form-group">
  <div className="floating-label">
    <input type="text" id="mobileNumber" required />
    <label htmlFor="mobileNumber">Mobile Number</label>
  </div>
  <div className="floating-label">
    <input type="email" id="emailId" required />
    <label htmlFor="emailId">Email Id</label>
  </div>
</div>


          <p className="section-label">Volunteer Opportunities</p>
<div className="checkbox-group">
  <label>
    <input type="checkbox" />
    <div>
      <span>Volunteer Opportunities</span>
      <p className="checkbox-desc">Help us organize and package food donations for distribution.</p>
    </div>
  </label>
  <label>
    <input type="checkbox" />
    <div>
      <span>Community Outreach</span>
      <p className="checkbox-desc">Assist in spreading awareness about food insecurity and our mission.</p>
    </div>
  </label>
  <label>
    <input type="checkbox" />
    <div>
      <span>Fundraising & Events</span>
      <p className="checkbox-desc">Lend a hand in organizing and running fundraising events.</p>
    </div>
  </label>
  <label>
    <input type="checkbox" />
    <div>
      <span>Administrative Support</span>
      <p className="checkbox-desc">Provide assistance with office tasks and logistics.</p>
    </div>
  </label>
</div>
<hr className="section-divider" />

          <p className="thank-you-msg">💜 Thank you! Your support is greatly appreciated!</p>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerModal;
