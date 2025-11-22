import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Fashion That Speaks Your Style</h1>
          <p className="hero-subtitle">
            Discover the latest trends in men's, women's, and kids' fashion. 
            Quality clothing that fits your lifestyle.
          </p>
          <Link to="/men" className="hero-cta">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span className="hero-icon">👕</span>
          </div>
        </div>
      </section>

      <section className="featured-categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          <Link to="/men" className="category-card">
            <div className="category-icon">👔</div>
            <h3>Men's Collection</h3>
            <p>Explore our latest men's fashion</p>
          </Link>
          <Link to="/women" className="category-card">
            <div className="category-icon">👗</div>
            <h3>Women's Collection</h3>
            <p>Discover stylish women's clothing</p>
          </Link>
          <Link to="/kids" className="category-card">
            <div className="category-icon">👶</div>
            <h3>Kids' Collection</h3>
            <p>Fun and comfortable kids' wear</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

