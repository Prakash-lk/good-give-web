// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [isAboutOpen, setIsAboutOpen] = useState(false);
//   const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);
//   return (
//     <div>
//       <header className="header">
//         <div className="left-section">
//           <div className="logo-section">
//             <img
//               src="/images/Good Give Fotter Logo.png"
//               alt="Goodgive logo"
//               className="logo"
//             />
//             <span className="brand-name">Goodgive</span>
//           </div>
//           <nav className="nav-links">
//             <a href="#" className="dropdown" onClick={toggleAboutDropdown}>
//               About{" "}
//               <i
//                 className={`fas fa-chevron-down arrow ${
//                   isAboutOpen ? "open" : ""
//                 }`}
//               ></i>
//             </a>
//             {isAboutOpen && (
//               <div className="dropdown-content">
//                 <a href="#">Our Story</a>
//                 <a href="#">Mission</a>
//                 <a href="#">Team</a>
//               </div>
//             )}
//             <a href="#" className="highlight">
//               Donate
//             </a>
//             <a href="#">Volunteer</a>
//             <a href="#">What We Do</a>
//             <a href="#">Contact Us</a>
//           </nav>
//         </div>
//         <div className="actions">
//           <img src="/images/cart.png" alt="Cart Icon" className="cart-icon" />
//           <button className="login-btn">Login</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-left">
//           <h1>
//             Fight Against <br /> Hunger Donating <br />
//             <span className="highlight-blue">Food Today</span>
//           </h1>
//           <p>
//             Your donation can help provide food to <br /> people who are
//             struggling to feed <br /> themselves and their families
//           </p>
//           <div className="hero-buttons">
//             <button className="donate-btn">Donate Now</button>
//             <button className="volunteer-btn">Register as Volunteer</button>
//           </div>
//         </div>
//         <div className="hero-right">
//           <div className="image-stack">
//             <img
//               src="/images/Landing Page BG@2x.png"
//               alt="Background"
//               className="bg-image"
//             />
//             <img
//               src="/images/import1.png"
//               alt="Foreground"
//               className="main-image"
//             />
//           </div>
//         </div>
//       </section>
//       {/* Mi-Vi Section */}
//       <section className="vision-mission-section relative">
//         <div className="vision-text">
//           <h2>Our Vision</h2>
//           <p>
//             A hunger-free world where every individual has access to the <br />
//             food they need to thrive. We envision a world where food <br />
//             insecurity is a thing of the past, and where communities <br />
//             work together to support and care for one another.
//           </p>
//           <a href="#" className="read-more">
//             READ MORE
//           </a>
//         </div>

//         <div className="vision-image">
//           <img src="/images/Our Vision@2x.png" alt="Vision" />
//         </div>

//         <div className="mission-image">
//           <img src="/images/Our Mission@2x.png" alt="Mission" />
//         </div>

//         <div className="mission-text">
//           <h2>Our Mission</h2>
//           <p>
//             Our mission is simple: to provide nutritious, non-perishable <br />
//             food to individuals and families in need. We strive to <br />
//             reduce food waste, promote sustainability, and support <br />
//             long-term solutions to hunger, ensuring that everyone can <br />
//             lead healthy, productive lives.
//           </p>
//           <a href="#" className="read-more">
//             READ MORE
//           </a>
//         </div>

//         <div className="decorative-bottom-left">
//           <img
//             src="/images/Our Vision Our Mission BG@2x.png"
//             alt="Decorative Element"
//           />
//         </div>
//       </section>
//       {/* core-values section */}
//       <section className="core-values-section">
//         <h2>Our core values</h2>
//         <p>
//           Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem
//           detraxit hosti et quidem se texit, ne ad respondendum reddidisti
//           voluptates omittantur maiorum dolorum fuga.
//         </p>

//         <div className="core-values-grid">
//           <div className="value-card">
//             <img
//               src="/images/compassion-icon.png"
//               alt="Compassion"
//               className="value-icon"
//             />
//             <h3>Compassion</h3>
//             <p>
//               We work with empathy and kindness to meet the immediate and
//               long-term needs of our neighbors.
//             </p>
//           </div>
//           <div className="value-card">
//             <img
//               src="/images/integrity-icon.png"
//               alt="Integrity"
//               className="value-icon"
//             />
//             <h3>Integrity</h3>
//             <p>
//               We are committed to transparency, accountability, and ethical
//               practices in everything we do.
//             </p>
//           </div>
//           <div className="value-card">
//             <img
//               src="/images/sustainability-icon.png"
//               alt="Sustainability"
//               className="value-icon"
//             />
//             <h3>Sustainability</h3>
//             <p>
//               We focus on reducing food waste and finding sustainable solutions
//               to hunger.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* impact-section */}
//       <section className="impact-section">
//         <img
//           src="/images/our-impact-bg-2x.png"
//           alt="Impact background"
//           className="impact-background"
//         />
//         <div className="impact-content">
//           <h2>Our Impact So Far</h2>
//           <p className="impact-subtitle">
//             We are proud of the work we've done and the lives we've touched, but
//             we know there is still much to be done.
//           </p>

//           <div className="impact-stats">
//             <div className="stat-block">
//               <h3>20000+</h3>
//               <p className="stat-title">Meals Served</p>
//               <p className="stat-desc">
//                 Meals served to individuals <br /> and families in need
//               </p>
//             </div>
//             {/* <div className="divider" /> */}
//             <div className="stat-block">
//               <h3>5000+</h3>
//               <p className="stat-title">Food Distributed</p>
//               <p className="stat-desc">
//                 Packets of non-persiable food <br /> distributed.
//               </p>
//             </div>
//             {/* <div className="divider" /> */}
//             <div className="stat-block">
//               <h3>1000+</h3>
//               <p className="stat-title">Families Assisted</p>
//               <p className="stat-desc">
//                 Families supported with <br /> regular food distributions.
//               </p>
//             </div>
//             {/* <div className="divider" /> */}
//             <div className="stat-block">
//               <h3>50+</h3>
//               <p className="stat-title">Volunteers Engaged</p>
//               <p className="stat-desc">
//                 Volunteers helping us make a <br /> difference
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* How to Donate Section */}
//       <section className="how-to-donate">
//         <div className="donate-container">
//           <h2 className="donate-heading">How to Donate</h2>
//           <p className="donate-description">
//             Torquem detraxit hosti et quidem se ipsam causam non fuisse torquem
//             detraxit hosti et quidem <br /> se texit, ne ad respondendum
//             reddidisti voluptates omittantur maiorum dolorum fuga.
//           </p>

//           <div className="donate-options">
//             <div className="donate-card">
//               <img
//                 src="/images/Donate.png"
//                 alt="Food Icon"
//                 className="donate-card-image"
//               />
//               <h3>Donate Non-Perishable Food Items</h3>
//               <p>
//                 We accept a wide variety of non-perishable food <br />{" "}
//                 donations, including Canned goods (vegetables, <br /> fruits,
//                 soups, beans, meats, etc.), Dry foods (rice, <br /> cereal,
//                 lentils, flour, etc.), baby food, Cooking oil <br /> and spices
//               </p>
//             </div>
//             <div className="donate-card">
//               <img
//                 src="/images/Box.png"
//                 alt="Box Icon"
//                 className="donate-card-image"
//               />
//               <h3>Choose the Box</h3>
//               <p>
//                 If you'd prefer to donate by choosing the food item <br /> that
//                 you want to donate, you can view the options <br /> available in
//                 the *Food-box menu *, we will use <br /> your contribution to
//                 purchase food and the same <br /> combination of items will be
//                 consolidated in a Food- <br /> box and the same will be
//                 delivered to one family.
//               </p>
//             </div>
//             <div className="donate-card">
//               <img
//                 src="/images/Dfinancially.png"
//                 alt="Donate Financially Icon"
//                 className="donate-card-image"
//               />
//               <h3>Donate Financially</h3>
//               <p>
//                 If you'd prefer to donate money, we can use your <br />{" "}
//                 contribution to purchase food in bulk, maintain our <br />{" "}
//                 operations, and support our community outreach <br /> programs.
//                 A small donation can go a long way in <br /> providing essential
//                 meals to families in need.
//               </p>
//             </div>
//             <div className="donate-card">
//               <img
//                 src="/images/Host.png"
//                 alt="Food Drive Icon"
//                 className="donate-card-image"
//               />
//               <h3>Host a Food Drive</h3>
//               <p>
//                 Consider organizing a food drive at your school, <br />{" "}
//                 workplace, or community center. We can provide <br /> guidance
//                 on how to run an effective drive and <br /> ensure your efforts
//                 support those who need it <br /> most.
//               </p>
//             </div>
//           </div>

//           <button className="donate-now-button">Donate Now</button>
//           <img
//             src="/images/How-to-Donate- VectorBG.png"
//             alt="Decorative"
//             className="donate-corner-image"
//           />
//           <img
//             src="/images/How to Donate BG@2x.png"
//             alt="Right Decorative"
//             className="donate-side-image-right"
//           />
//         </div>
//       </section>
//       {/* Success Stories Section */}
//       <section className="success-stories">
//         <div className="success-container">
//           <h2 className="success-heading">Success Stories</h2>
//           <p className="success-description">
//             Your donations and support help change lives. Here are just a few
//             stories of <br /> individuals whose lives have been touched by our
//             work:
//           </p>

//           <div className="success-carousel">
//             <img
//               src="/images/Success Stories BG@2x.png"
//               alt="Background"
//               className="carousel-bg"
//             />
            
//             <button className="carousel-arrow left">&#10094;</button>

            
//             <div className="story-card lower-card">
//               <img
//                 src="/images/AshaΓÇÖs Story@2x.png"
//                 alt="Asha"
//                 className="story-avatar"
//               />
//               <h3>Asha’s Story</h3>
//               <div className="quote">
//                 <img
//                   src="/images/Quote1,3.png"
//                   alt="Quote"
//                   className="quote-img"
//                 />
//               </div>
//               <p>
//                 I never thought I’d need help, but when I lost my job and faced
//                 eviction, Good-give provided us with food and connected us to
//                 other resources. Thanks to them, we’re starting to rebuild our
//                 lives.
//               </p>
//             </div>

//             <div className="story-card featured">
//               <img
//                 src="/images/Pinto's Story@2x.png"
//                 alt="Pinto"
//                 className="story-avatar"
//               />
//               <h3>Pinto’s Story</h3>
//               <div className="quote">
//                 <img
//                   src="/images/Quote2.png"
//                   alt="Quote"
//                   className="quote-img"
//                 />
//               </div>
//               <p>
//                 I lost my job during the pandemic and was struggling to feed my
//                 children. Good-give provided us with nutritious meals every
//                 month, which gave me one less thing to worry about. I am so
//                 grateful for your support.
//               </p>
//             </div>

//             <div className="story-card lower-card">
//               <img
//                 src="/images/Anand Story@2x.png"
//                 alt="Anand"
//                 className="story-avatar"
//               />
//               <h3>Anand’s Story</h3>
//               <div className="quote">
//                 <img
//                   src="/images/Quote1,3.png"
//                   alt="Quote"
//                   className="quote-img"
//                 />
//               </div>
//               <p>
//                 When my father became ill, I had to take time off work to care
//                 for him. The food I received from the food bank allowed me to
//                 focus on his recovery without the stress of how to feed my
//                 family.
//               </p>
//             </div>

//             <button className="carousel-arrow right">&#10095;</button>
//           </div>
//         </div>
//       </section>
//       {/* Volunteer Section */}
//       <section className="volunteer-section">
//         <img
//           src="/images/Becoming a Volunteer Left BG@2x.png"
//           alt="Left Decor"
//           className="side-image left-side"
//         />

//         <div className="volunteer-box">
//           <img
//             src="/images/Becoming a Volunteer of Goodgive Bg@2x.png"
//             alt="Background"
//             className="volunteer-background-image"
//           />
//           <div className="volunteer-content">
//             <div className="volunteer-avatars">
//               <div className="avatar-stack">
//                 <img src="/images/AshaΓÇÖs Story@2x.png" alt="User 1" />
//                 <img src="/images/Pinto's Story@2x.png" alt="User 2" />
//                 <img src="/images/Anand Story@2x.png" alt="User 3" />
//                 <img src="/images/AshaΓÇÖs Story@2x.png" alt="User 4" />
//                 <div className="avatar-badge">100+</div>
//               </div>
//             </div>
//             <h2>
//               Becoming a Volunteer <br /> of Goodgive
//             </h2>
//             <button className="register-btn">Register Now</button>
//           </div>

//           <div className="volunteer-image">
//             <img
//               src="/images/Becoming a Volunteer of Goodgive People@2x.png"
//               alt="Volunteers"
//             />
//           </div>
//         </div>

//         <img
//           src="/images/Becoming a Volunteer Right BG @2x.png"
//           alt="Right Decor"
//           className="side-image right-side"
//         />
//       </section>
//       {/* FAQ Section */}
//       <section className="faq-section">
//         <div className="faq-container">
//           <h2 className="faq-title">Frequently-Asked Questions</h2>

//           <div className="faq-box">
//             <div className="faq-item">
//               <div className="faq-question">
//                 Omne animal, simul atque haec subtilius velint tradere et
//                 rationibus.
//                 <span className="faq-icon">+</span>
//               </div>
//             </div>

//             <div className="faq-item">
//               <div className="faq-question">
//                 Torquatos nostros? quos tu tam egregios viros censes aut
//                 officiis.
//                 <span className="faq-icon">+</span>
//               </div>
//             </div>

//             <div className="faq-item">
//               <div className="faq-question">
//                 Si sine causa? quae fuerit causa, mox videro; interea hoc.
//                 <span className="faq-icon">+</span>
//               </div>
//             </div>

//             <div className="faq-item open">
//               <div className="faq-question">
//                 Sed ut calere ignem, nivem esse vult, summumque malum et.
//                 <span className="faq-icon">−</span>
//               </div>
//               <div className="faq-answer">
//                 At vero eos censes aut quid percipit aut rerum facilis.
//               </div>
//             </div>

//             <div className="faq-item">
//               <div className="faq-question">
//                 Epicurus in ea voluptate ponit, quod summum malum dolorem,
//                 idque.
//                 <span className="faq-icon">+</span>
//               </div>
//             </div>

//             <div className="faq-item">
//               <div className="faq-question">
//                 Tum dicere exorsus est laborum et voluptatem ut perspiciatis,
//                 unde.
//                 <span className="faq-icon">+</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Footer Section */}
//       <section className="footer-section">
//         <div className="footer-container">
//           {/* Left Side */}
//           <div className="footer-left">
//             <div className="logo-with-name">
//               <img
//                 src="/images/Good Give Fotter Logo.png"
//                 alt="Goodgive Logo"
//                 className="footer-logo"
//               />
//               <h1 className="footer-brand-name">Goodgive</h1>
//             </div>

//             <h2>Together, We Can End Hunger</h2>
//             <p className="footer-highlight">
//               Thank you for visiting Good-give.com
//             </p>
//             <p>
//               Your support—whether it’s through donating food, time, or <br />
//               funds—makes a real impact on the lives of those who need it <br />
//               most. Join us today and be part of the movement to end <br />
//               hunger in our community. Every donation, no matter how <br />
//               small, brings us closer to a world where no one goes hungry.
//             </p>
//             <div className="footer-buttons">
//               <button className="donate-btn">Donate Now</button>
//               <button className="volunteer-btn">Signup to Volunteer</button>
//             </div>
//           </div>

//           <div className="footer-right">
//             <h3>Contact Us</h3>
//             <p>
//               We’d love to hear from you! Whether you have <br />
//               questions, want to donate, or are interested in <br />
//               volunteering, don’t hesitate to get in touch.
//             </p>
//             <p>
//               Phone: <strong>+91-7667991280</strong>
//             </p>
//             <p>
//               Email: <strong>donate@goodgive.com</strong>
//             </p>
//             <p>
//               Address: <strong>YMCA, Chennai-600091</strong>
//             </p>

//             <p className="follow-label">Follow Us:</p>
//             <div className="social-icons">
//               <a href="#" className="circle-icon">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="x-logo">
//                 <img
//                   src="/images/twitter.png"
//                   alt="X Logo"
//                   className="x-logo-image"
//                 />
//               </a>
//               <a href="#" className="circle-icon">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="#" className="circle-icon">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-image">
//           <img
//             src="/images/Footer Image@2x.png"
//             alt="Footer Image"
//             className="footer-img"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import CoreValues from "./components/CoreValues";
import Impact from "./components/Impact";
import HowToDonate from "./components/HowToDonate";
import SuccessStories from "./components/SuccessStories";
import VolunteerSection from "./components/VolunteerSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

import Apps from "./components0/Apps"; // Make sure this path is correct
import CartPage from "./components0/CartPage"; // Add this import

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <VisionMission />
      <CoreValues />
      <Impact />
      <HowToDonate />
      <SuccessStories />
      <VolunteerSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

function App() {
  // ✅ Global cart state shared across TabSection (Apps) and CartPage
  const [cartItems, setCartItems] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/what-we-do"
          element={
            <>
              <Header />
              <Apps cartItems={cartItems} setCartItems={setCartItems} />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

