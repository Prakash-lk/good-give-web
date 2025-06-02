import React, { useState, useEffect } from "react";
import "./Apps.css";
import { FaCheckCircle } from "react-icons/fa";
import CartPage from "./CartPage";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Apps({ cartItems, setCartItems }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);

  const [activeTab, setActiveTab] = useState(0); // ✅ Keep just one
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [selectedAmount, setSelectedAmount] = useState(25000);
  const amounts = [50000, 25000, 10000, 5000, 2500, 1000];

  const handleAmountClick = (amt) => {
    setSelectedAmount(amt);
  };

  const handleCustomAmountChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setSelectedAmount(value);
    }
  };

  const navigate = useNavigate();

  const handleAdd = (itemName) => {
    setCartItems((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }));
  };

  const handleIncrease = (itemName) => {
    setCartItems((prev) => ({
      ...prev,
      [itemName]: prev[itemName] + 1,
    }));
  };

  const handleDecrease = (itemName) => {
    setCartItems((prev) => {
      const newCount = prev[itemName] - 1;
      if (newCount <= 0) {
        const newCart = { ...prev };
        delete newCart[itemName];
        return newCart;
      }
      return {
        ...prev,
        [itemName]: newCount,
      };
    });
  };

  const handleViewCart = () => {
    navigate("/cart"); // Navigates to full CartPage with Header
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.goToTab1) {
      setActiveTab(1);
    }
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero_section">
        <div className="hero_left">
          <h1>
            How Your <br /> Donation Will <br />
            <span className="highlight_blue">Impact Lives</span>
          </h1>
          <p>
            Every non-perishable food item you donate
            <br />
            goes direct to individuals and families in
            <br />
            need. Here's how your donation will make a<br />
            real difference
          </p>
        </div>
        <div className="hero_right">
          <div className="image_stack">
            <img
              src="/images/Landing Page BG@2x.png"
              alt="Background"
              className="bg_image"
            />
            <img
              src="/images/import2.png"
              alt="Foreground"
              className="main_image"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <img
          src="/images/our-impact-bg-2x.png"
          alt="Impact background"
          className="impact-background"
        />
        <div className="impact-content">
          <h2>Ways to Give</h2>
          <p className="impact-subtitle">
            Join the fight against child hunger by donating today.
          </p>
        </div>
      </section>

      {/* Donation Tabs Section */}
      <section className="donate-section">
        <div className="donate-container">
          <div className="tab-header">
            {[
              "Donate Non-Perishable Food",
              "Choose the Box",
              "Donate Financially",
              "Host a Food Drive",
            ].map((tab, index) => (
              <button
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-divider"></div>

          {/* TAB CONTENT */}
          {activeTab === 0 && (
            <>
              <div className="donate-content">
                <div className="donate-left">
                  <h3>
                    We accept a wide variety of non-perishable food donations
                  </h3>
                  <ul>
                    <li>
                      <FaCheckCircle className="icon" /> Canned goods
                      (vegetables, fruits, soups, beans, meats, etc.)
                    </li>
                    <li>
                      <FaCheckCircle className="icon" /> Dry foods (rice,
                      cereal, lentils, flour, etc.)
                    </li>
                    <li>
                      <FaCheckCircle className="icon" /> Baby food
                    </li>
                    <li>
                      <FaCheckCircle className="icon" /> Cooking oil and spices
                    </li>
                  </ul>
                </div>
                <div className="donate-map">
                  <iframe
                    title="YMCA Map"
                    src="https://www.google.com/maps/embed?pb=..." // Replace with real embed link
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <p className="donate-info">
                Donating food is as simple as dropping off your items at our
                donation centers or participating in a food drive event.
                <br />
                If you are in Chennai you can visit our Goodgive Food bank stall
                at YMCA Vepery for drop-off.
              </p>

              <div className="donation-cards">
                <div className="donation-card">
                  <div className="donation-card-content">
                    <h4>YMCA - Nandanam</h4>
                    <p>
                      497, Anna Salai, YMCA College <br /> of Physical
                      Education, Nandanam, <br /> Chennai, Tamil Nadu - 600035.
                    </p>
                    <a href="#" className="direction-link">
                      Get Direction
                    </a>
                  </div>
                  <img src="/images/nandanam.png" alt="YMCA Nandanam" />
                </div>

                <div className="donation-card">
                  <div className="donation-card-content">
                    <h4>YMCA - Royapettah</h4>
                    <p>
                      27th Street, 7th Avenue, Physical <br /> Education,
                      Royapettah, Chennai, <br /> Tamil Nadu - 600014.
                    </p>
                    <a href="#" className="direction-link">
                      Get Direction
                    </a>
                  </div>
                  <img src="/images/rayapet.png" alt="YMCA Royapettah" />
                </div>
              </div>
            </>
          )}

          {/* Only keep this */}
          {activeTab === 1 && (
            <div className="choose-box-section">
              <p className="choose-box-desc">
                If you’d prefer to donate by choosing the food item that you
                want to donate, you can view the options available in the <br />{" "}
                <strong>Food-box menu</strong>. We will use your contribution to
                purchase food and the same combination of items will be <br />{" "}
                consolidated in a Food-box and the same will be delivered to one
                family.
              </p>

              <div className="image-grid">
                {[
                  {
                    name: "Green Box",
                    image: "/images/greenbox.png",
                    amount: "₹500",
                  },
                  {
                    name: "Blue Box",
                    image: "/images/bluebox.png",
                    amount: "₹1,000",
                  },
                  {
                    name: "Red Box",
                    image: "/images/redbox.png",
                    amount: "₹1,500",
                  },
                  {
                    name: "Silver Box",
                    image: "/images/silverbox.png",
                    amount: "₹2,000",
                  },
                  {
                    name: "Gold Box",
                    image: "/images/goldbox.png",
                    amount: "₹2,500",
                  },
                  {
                    name: "Platinum Box",
                    image: "/images/platinumbox.png",
                    amount: "₹3,000",
                  },
                ].map((item, index) => (
                  <div className="image-item" key={index}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-footer">
                      <div className="item-text">
                        <p className="item-name">{item.name}</p>
                        <p className="item-amount">{item.amount}</p>
                      </div>
                      {cartItems[item.name] ? (
                        <div className="quantity-box">
                          <button
                            onClick={() => handleIncrease(item.name)}
                            className="qty-btn"
                          >
                            +
                          </button>
                          <span className="qty-count">
                            {cartItems[item.name]}
                          </span>
                          <button
                            onClick={() => handleDecrease(item.name)}
                            className="qty-btn"
                          >
                            −
                          </button>
                        </div>
                      ) : (
                        <button
                          className="add-btn"
                          onClick={() => handleAdd(item.name)}
                        >
                          ADD
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="view-cart-container">
                <button className="view-cart-btn" onClick={handleViewCart}>
                  View Cart
                </button>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="tab_panel">
              <p>
                If you'd prefer to donate money, we can use your contribution to
                purchase food in bulk, maintain our operations, <br /> and
                support our community outreach programs. A small donation can go
                a long way in providing essential meals to <br /> families in
                need.
              </p>

              <div className="donation_options">
                <label>
                  <input type="radio" name="region" defaultChecked /> Indian
                </label>
                <label>
                  <input type="radio" name="region" /> Foreign
                </label>
              </div>

              <div className="give_once_label">Give Once</div>
              <p className="give_once_desc">
                Please select your donation amount (*1 meal ₹25/-)
              </p>

              <div className="modal_image">
                <img src="/images/basket.png" alt="Basket" />
              </div>

              <h3>₹{selectedAmount.toLocaleString()}</h3>
              <p className="calc_amount">
                {Math.floor(selectedAmount / 25)} meals
              </p>

              <div className="amount_buttons">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleAmountClick(amt)}
                    className={selectedAmount === amt ? "selected" : ""}
                  >
                    ₹{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              <input
                type="number"
                className="custom_amount"
                placeholder="Enter Amount"
                onChange={handleCustomAmountChange}
                value={
                  amounts.includes(selectedAmount) ? "" : selectedAmount || ""
                }
              />

              <div className="payment_icons">
                <img src="/images/payment-methods.png" alt="Payment Methods" />
                <p>We accept all major payment methods</p>
              </div>

              <button className="donate_action_btn">Proceed to Donate</button>

              <p className="tax_note">
                <img src="/images/info.png" alt="info" className="info_img" />
                Donations are tax exempted under 80G
              </p>
            </div>
          )}

          {activeTab === 3 && (
            <div className="tab-panel">
              <p className="food-drive-intro">
                Consider organizing a food drive at your school, workplace, or
                community center. We can provide guidance on how to run an
                effective drive and ensure your efforts support those who need
                it most.
              </p>

              <h2 className="contact-heading">Contact Us</h2>
              <p className="contact-subtext">
                Complete the below form to contact our Development team
              </p>

              <form className="contact-form">
                <div className="form-row">
                  <div className="input-group">
                    <input type="text" name="firstName" required />
                    <label>First Name</label>
                  </div>
                  <div className="input-group">
                    <input type="text" name="lastName" required />
                    <label>Last Name</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <input type="text" name="mobile" required />
                    <label>Mobile Number</label>
                  </div>
                  <div className="input-group">
                    <input type="email" name="email" required />
                    <label>Email Id</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group full-width">
                    <textarea name="message" rows="4" required></textarea>
                    <label>Type Something</label>
                  </div>
                </div>

                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      <section className="donation-impact-section">
        <h2 className="impact-heading">How Your Donation Will Impact Lives</h2>
        <p className="impact-subtext">
          Every non-perishable food item you donate goes directly to individuals
          and families in need. Here's how your donation will make a real
          difference:
        </p>

        <div className="impact-grid">
          <div className="impact-card">
            <img src="/images/PNM.png" alt="Providing Nutritious Meals" />
            <h3>Providing Nutritious Meals</h3>
            <p>
              Your food donations help us offer balanced, nutritious <br />{" "}
              meals to those who might otherwise go without.
            </p>
          </div>
          <div className="impact-card">
            <img
              src="/images/SVC.png"
              alt="Supporting Vulnerable Communities"
            />
            <h3>Supporting Vulnerable Communities</h3>
            <p>
              Children, the elderly, single parents, and people facing <br />{" "}
              unemployment or emergencies rely on food banks like <br /> ours.
              Your contributions give them one less thing to <br /> worry about.
            </p>
          </div>
          <div className="impact-card">
            <img src="/images/RFW.png" alt="Reducing Food Waste" />
            <h3>Reducing Food Waste</h3>
            <p>
              Every time you donate non-perishable food, you <br /> help prevent
              perfectly good food from ending up <br /> in landfills while
              providing to those who need it.
            </p>
          </div>
          <div className="impact-card">
            <img src="/images/BSC.png" alt="Building Stronger Communities" />
            <h3>Building Stronger Communities</h3>
            <p>
              By participating in our food drive or making a regular <br />{" "}
              donation, you're helping to create a stronger, more <br />{" "}
              supportive community where we can all care for each other.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <div className="footer-container">
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
            <p className="footer-highlight">
              Thank you for visiting Good-give.com
            </p>
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
    </div>
  );
}

export default Apps;
