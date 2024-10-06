import React from 'react';
import './Sale.css';
import Header from './Header';
import './Header.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"; // Importing social icons

// Header Section Component
const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="header-content">
        <h1>Gorgeous BloomBags</h1>
        <p>Fresh flowers from around the world in BloomThis' gorgeous new BloomBag. Create your own flower arrangement and impress friends & family. Free delivery in KL, Selangor, Penang & JB.</p>
      </div>
    </div>
  );
};

const products = [
  { name: "Carissima Anthurium BloomBag", originalPrice: "1800.00", discountedPrice: "1500.00", reviews: "5 reviews", rating: 5, image: require('../assets/sale1.png') },
  { name: "Mirae Pink Tulip Mini BloomBag", originalPrice: "1800.00", discountedPrice: "1650.00", reviews: "21 reviews", rating: 4, image: require('../assets/sale2.png') },
  { name: "Minji Pink Daisy Mini BloomBag", originalPrice: "1500.00", discountedPrice: "1600.00", reviews: "5 reviews", rating: 5, image: require('../assets/sale3.png') },
  { name: "Ivonne Lilac Rose Mini BloomBag", originalPrice: "1800.00", discountedPrice: "1550.00", reviews: "13 reviews", rating: 4, image: require('../assets/sale4.png') },
  { name: "Marissa White Lily BloomBag", originalPrice: "1850.00", discountedPrice: "1500.00", reviews: "6 reviews", rating: 5, image: require('../assets/sale5.png') },
  { name: "Euphemia Dancing Lady BloomBag", originalPrice: "1800.00", discountedPrice: "1250.00", reviews: "7 reviews", rating: 4, image: require('../assets/sale6.png') },
  { name: "Ellen Yellow Sunflower BloomBag", originalPrice: "1650.00", discountedPrice: "1540.00", reviews: "16 reviews", rating: 5, image: require('../assets/sale7.png') },
  { name: "Tessa Pink Lily BloomBag", originalPrice: "1700.00", discountedPrice: "1500.00", reviews: "3 reviews", rating: 4, image: require('../assets/sale8.png') },
  { name: "Marissa White Lily BloomBag", originalPrice: "1850.00", discountedPrice: "1500.00", reviews: "6 reviews", rating: 5, image: require('../assets/sale9.png') },
  { name: "Euphemia Dancing Lady BloomBag", originalPrice: "1800.00", discountedPrice: "1250.00", reviews: "7 reviews", rating: 4, image: require('../assets/sale10.png') },
  { name: "Ellen Yellow Sunflower BloomBag", originalPrice: "1650.00", discountedPrice: "1540.00", reviews: "16 reviews", rating: 5, image: require('../assets/sale11.png') },
  { name: "Tessa Pink Lily BloomBag", originalPrice: "1700.00", discountedPrice: "1500.00", reviews: "3 reviews", rating: 4, image: require('../assets/sale12.png') },
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
              <span className="original-price">Rs. {product.originalPrice}</span>
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
  
