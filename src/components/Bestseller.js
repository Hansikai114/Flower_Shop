import React from 'react';
import './Bestseller.css';
import Header from './Header';
import './Header.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"; 

// Header Section Component
const HeaderSection = () => {
  return (
    <div className="header-section1">
      <div className="header-content1">
        <h1>Bestseller Flowers & Gifts</h1>
        <p>Need a gift now? Pick your choice of gorgeous flowers or curated gifts from our all-time bestsellers and send your gift in minutes. Free same-day delivery in KL, Selangor, Penang & JB.</p>
      </div>
    </div>
  );
};

const products = [
  { name: "Amaal Red Rose Bouquet", discountedPrice: "1500.00", reviews: "435 reviews", rating: 5, image: require('../assets/bestseller1.png') },
  { name: "Rachel Pink Rose Hand Bouquet", discountedPrice: "2000.00", reviews: "360 reviews", rating: 4, image: require('../assets/bestseller2.png') },
  { name: "Ellen Balloon Flower Box", discountedPrice: "2500.00", reviews: "115 reviews", rating: 5, image: require('../assets/bestseller3.png') },
  { name: "Cheyenne", discountedPrice: "1220.00", reviews: "204 reviews", rating: 4, image: require('../assets/bestseller4.png') },
  { name: "Aphrodite Red Rose Bouquet", discountedPrice: "3500.00", reviews: "56 reviews", rating: 5, image: require('../assets/bestseller5.png') },
  { name: "Sadie White", discountedPrice: "2100.00", reviews: "127 reviews", rating: 4, image: require('../assets/bestseller6.png') },
  { name: "Brianna Flowers & Fruit Basket", discountedPrice: "1700.00", reviews: "76 reviews", rating: 5, image: require('../assets/bestseller7.png') },
  { name: "Constance", discountedPrice: "1800.00", reviews: "83 reviews", rating: 4, image: require('../assets/bestseller8.png') },
  { name: "Lorena Flowers & Fruits Gift Box", discountedPrice: "4500.00", reviews: "16 reviews", rating: 5, image: require('../assets/bestseller9.png') },
  { name: "Hester Flowers & Fruit Basket", discountedPrice: "3500.00", reviews: "7 reviews", rating: 4, image: require('../assets/bestseller10.png') },
  { name: "Rachel Cappuccino Rose Bouquet", discountedPrice: "4500.00", reviews: "5 reviews", rating: 5, image: require('../assets/bestseller11.png') },
  { name: "Triumph", discountedPrice: "1500.00", reviews: "3 reviews", rating: 4, image: require('../assets/bestseller12.png') },
];


const ProductSection = () => {
  return (
    <div className="product-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="product-reviews">
              <span>{"★".repeat(product.rating)}</span>
              <span>{product.reviews}</span>
            </div>
            <div className="product-pricing">
              <span className="discounted-price">Rs. {product.discountedPrice}</span>
            </div>
          </div>
        ))}
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
       <Header/> 
      <HeaderSection />
      <ProductSection />
      <Footer />    
      
    </div>
  );
  
  export default Component;
  
