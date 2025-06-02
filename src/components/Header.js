import React, { useState } from "react";
import SignupModal from "../components1/SignupModal";
import { Link } from "react-router-dom";
import '../App.css';

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);
  const handleLoginClick = () => setShowSignup(true);
  const handleCloseModal = () => setShowSignup(false);

  return (
    <>
      <header className="header">
        <div className="left-section">
          <div className="logo-section">
            <img
              src="/images/Good Give Fotter Logo.png"
              alt="Goodgive logo"
              className="logo"
            />
            <span className="brand-name">Goodgive</span>
          </div>
          <nav className="nav-links">
            <a href="#" className="dropdown" onClick={toggleAboutDropdown}>
              About{" "}
              <i className={`fas fa-chevron-down arrow ${isAboutOpen ? "open" : ""}`}></i>
            </a>
            {isAboutOpen && (
              <div className="dropdown-content">
                <a href="#">Our Story</a>
                <a href="#">Mission</a>
                <a href="#">Team</a>
              </div>
            )}
            <a href="#" className="highlight">Donate</a>
            <a href="#">Volunteer</a>
            <Link to="/what-we-do">What We Do</Link>
            <a href="#">Contact Us</a>
          </nav>
        </div>
        <div className="actions">
          <img src="/images/cart1.png" alt="Cart Icon" className="cart-icon" />
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
        </div>
      </header>
      {showSignup && <SignupModal onClose={handleCloseModal} />}
    </>
  );
}

export default Header;
