import React from 'react';
import './ContactForm.css';
import Header from './Header';
import './Header.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"; 

const ContactForm = () => {
  return (

    <div className="contact-form-container">
      <div className="inquiries-section">
        <h2>Customer & Order Inquiries</h2>
        <p>We welcome your feedback, questions, and inquiries, as it’s invaluable in tailoring our services to better meet your needs. Please reach out to us using any of the contact numbers or email addresses provided below.</p>
        <p>+94 77564578</p>
        <p>support@blossombay.com</p>

        <h2>Events Inquiries</h2>
        <p>+94 77564578</p>
        <p>event@blossombay.com</p>
      </div>

      <h2>Get in Touch With Us</h2>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" placeholder="Mobile" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Message"></textarea>
        </div>

        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
}


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

// Main Component
const Component = () => (
    <div>
      <Header/>
      <ContactForm />
      <Footer />
      </div>
  );
  
  export default Component;
  

