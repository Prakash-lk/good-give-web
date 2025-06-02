import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const boxDetails = {
  "Green Box": { price: 500, image: "/images/greenbox.png" },
  "Blue Box": { price: 1000, image: "/images/bluebox.png" },
  "Red Box": { price: 1500, image: "/images/redbox.png" },
  "Silver Box": { price: 2000, image: "/images/silverbox.png" },
  "Gold Box": { price: 2500, image: "/images/goldbox.png" },
  "Platinum Box": { price: 3000, image: "/images/platinumbox.png" },
};

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleIncrease = (itemName) => {
    setCartItems((prev) => ({
      ...prev,
      [itemName]: prev[itemName] + 1,
    }));
  };

  const handleDecrease = (itemName) => {
    if (cartItems[itemName] > 1) {
      setCartItems((prev) => ({
        ...prev,
        [itemName]: prev[itemName] - 1,
      }));
    } else {
      handleRemove(itemName);
    }
  };

  const handleRemove = (itemName) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[itemName];
    setCartItems(updatedCart);
  };

  const subtotal = Object.entries(cartItems).reduce(
    (acc, [name, qty]) => acc + boxDetails[name].price * qty,
    0
  );

  const handleBackClick = () => {
    navigate("/what-we-do", { state: { goToTab1: true } });
  };

  return (
    <div className="cart-page">
      <h2 className="cart-heading">Your Cart</h2>
      <button className="back-link" onClick={handleBackClick}>
        &lt; Back to Grocery Store
      </button>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cartItems).map(([name, qty]) => (
            <tr key={name}>
              <td className="product-cell">
                <img
                  src={boxDetails[name].image}
                  alt={name}
                  className="product-img"
                />
                <span>{name}</span>
              </td>
              <td>₹{boxDetails[name].price}</td>
              <td>
                <div className="quantity-control">
                  <button onClick={() => handleDecrease(name)}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => handleIncrease(name)}>+</button>
                </div>
              </td>
              <td>₹{boxDetails[name].price * qty}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(name)}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals">
        <div className="totals-row">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <hr className="totals-divider" />
        <div className="totals-row grand-total">
          <span>Grand Total</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>

      <p className="cart-note">
        <img src="/images/info.png" alt="info" className="info_img" /> Every
        Meal is a 501(c) (3) nonprofit organization. Your contribution is
        tax-deductible to the extent allowed by law. Your <br />
        contribution is equivalent to the cost of the food items listed and will
        be utilized to provide food to children in our community
      </p>
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
};

export default CartPage;
