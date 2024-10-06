import React from 'react';
import './SignInPage.css';
import { FaSearch, FaUser, FaShoppingBag, FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"; // Importing social icons
import { Link } from 'react-router-dom'; 


// Header Component
const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={require("../assets/logo.png")} alt="BlossomBay Logo" className="logo-image" />
    </div>
    <nav className="nav">
      <Link to="/homepage">Home</Link>
      <a href="/birthday">Birthday</a>
      <a href="/bestseller">Bestseller</a>
      <a href="/sale">Sale</a>
      <Link to="/contactform">Contact Us</Link>
    </nav>
    <div className="icons">
      <FaSearch className="icon" />
      <FaUser className="icon" />
      <FaShoppingBag className="icon" />
    </div>
  </header>
);

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="form-section">
          <h2>Sign In to BlossomBay Account</h2>
          <form>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your Email Address" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>
          
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <div className="social-signin">
            <span>OR</span>
            <div className="social-buttons">
              <button className="facebook-btn">
                <BsFacebook className="icon" /> {/* Facebook icon */}
              </button>
              <button className="google-btn">
                <FaGoogle className="icon" /> {/* Google icon */}
              </button>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={require("../assets/sign.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-section info">
      <h4>Info</h4>
      <ul>
        <li><a href="#">News</a></li>
        <li><a href="#">Guides</a></li>
        <li><a href="#">Celebrations</a></li>
        <li><a href="#">Flower Facts</a></li>
        <li><a href="#">Bloombay Ideas</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Jobs for Community</a></li>
      </ul>
    </div>
    <div className="footer-section help">
      <h4>Help</h4>
      <ul>
        <li><a href="#">How to Order</a></li>
        <li><a href="#">Delivery Info</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Our Stores</a></li>
        <li><a href="#">Track Order</a></li>
        <li><a href="#">Flower Care</a></li>
        <li><a href="#">Rewards</a></li>
      </ul>
    </div>
    <div className="footer-section newsletter">
      <h4>Newsletter</h4>
      <p>Sign up for news and exclusive deals & get 10% off your first order</p>
      <input type="email" placeholder="Your email Address" />
      <button className="newsletter-btn">GET 10% OFF</button>
    </div>
    <div className="footer-section contact">
      <h4>Contact Us</h4>
      <div className="contact-details">
        <span>Email: Phone: </span>
        <span>contact@bloombay.com +60162567825</span>
      </div>
    </div>
    <div className="footer-section follow">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaPinterest />
      </div>
    </div>
    <div className="footer-bottom">
      <p>2024 © BlossomBay. All rights reserved.</p>
    </div>
  </footer>
);



const Component = () => (
  <div>
    <Header />
    <SignInPage />
    <Footer />
  </div>
);

export default Component;
