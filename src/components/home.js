import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./home.css"; // Combined CSS file
import { FaSearch, FaUser, FaShoppingBag,} from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"; // Importing social icons

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

// Hero Section Component
const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Artisan flowers & gifts for all occasions</h1>
      <p>Free card & photo • Same day delivery</p>
      <div className="hero-buttons">
        <Link to="/signin" className="button">Sign In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </div>
    </div>
  </section>
);


// Categories Component
const categories = [
  { name: "Bestsellers", image: "bestseller1.png" },
  { name: "Graduation", image: "bestseller2.png" },
  { name: "Birthday", image: "bestseller3.png" },
  { name: "Love", image: "bestseller4.png" },
  { name: "Condolence", image: "bestseller5.png" },
  { name: "Wedding", image: "birthday1.png" },
  { name: "Anniversary", image: "birthday2.png" },
  { name: "Grand Opening", image: "birthday3.png" },
  { name: "Proposal", image: "birthday4.png" },
  { name: "Congrat", image: "birthday5.png" },

  // Add more categories as needed
];

const Categories = () => (
  <div className="categories">
    {categories.map((category, index) => (
      <div key={index} className="category-item">
        <img src={require(`../assets/${category.image}`)} alt={category.name} />
        <p>{category.name}</p>
      </div>
    ))}
  </div>
);

// Features Component
const Features = () => (
  <section className="features">
    <div className="feature-item">
      <i>🌸</i>
      <p>Luxurious modern designs</p>
    </div>
    <div className="feature-item">
      <i>🖼️</i>
      <p>Artisan curated & handcrafted</p>
    </div>
    <div className="feature-item">
      <i>🚚</i>
      <p>Free same & next-day delivery</p>
    </div>
  </section>
);

// Latest Collections Component
const LatestCollections = () => (
  <section className="latest-collections">
    <h2>Latest Collections</h2>
    <div className="collections-grid">
      {/* First row items */}
      <div className="collection-item">
        <img src={require("../assets/home5.jpg")} alt="Birthday Flowers & Gifts" />
        <div className="collection-overlay">Birthday Flowers & Gifts</div>
      </div>
      <div className="collection-item">
        <img src={require("../assets/home6.jpg")} alt="Petal Pop Bouquets" />
        <div className="collection-overlay">Petal Pop Bouquets</div>
      </div>
      <div className="collection-item">
        <img src={require("../assets/home7.jpg")} alt="7.7 Sale" />
        <div className="collection-overlay">7.7 Sale</div>
      </div>

      {/* Second row items (two images in one row) */}
      <div className="second-row">
        <div className="collection-item large">
          <img src={require("../assets/bestseller1.png")} alt="Pink Day Bouquet & Flowers" />
          <div className="collection-overlay">Pink Day Bouquet & Flowers</div>
        </div>
        <div className="collection-item large">
          <img src={require("../assets/bestseller5.png")} alt="Floral Arranging Workshops" />
          <div className="collection-overlay">Floral Arranging Workshops</div>
        </div>
      </div>
    </div>
  </section>
);

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
const MainComponent = () => (
  <div>
    <Header />
    <HeroSection />
    <Categories />
    <Features />
    <LatestCollections />
    <Footer />    
      </div>
);

export default MainComponent; // Correctly exporting MainComponent
