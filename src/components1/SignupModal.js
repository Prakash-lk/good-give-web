import React, { useState } from "react";
import "./SignupModal.css"; // Ensure this file contains the CSS below

function SignupModal({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Create Account</h2>
        <p>to get started now!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>User Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email Id</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Password</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <div className="or-divider">or</div>
        <button className="google-btn">
  <img
    src="/images/google.png"
    alt="Google Icon"
    className="google-icon"
  />
  Continue with Google
</button>

        <p className="terms">
          By signing up, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
        </p>
      </div>
    </div>
  );
}

export default SignupModal;
