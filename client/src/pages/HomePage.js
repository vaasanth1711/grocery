import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to Grocery Store</h1>
        <p>Fresh produce delivered to your door</p>
        <Link to="/products" className="btn btn-primary">
          Shop Now
        </Link>
      </section>

      <section className="features">
        <h2>Why Shop With Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your groceries delivered within 24 hours</p>
          </div>
          <div className="feature-card">
            <h3>✅ Quality Guaranteed</h3>
            <p>We guarantee the freshness of all products</p>
          </div>
          <div className="feature-card">
            <h3>💳 Easy Payment</h3>
            <p>Multiple payment options available</p>
          </div>
          <div className="feature-card">
            <h3>📦 Secure Packaging</h3>
            <p>Products carefully packaged for safe delivery</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <Link to="/products" className="category-card" style={{ backgroundColor: '#90EE90' }}>
            🥬 Vegetables
          </Link>
          <Link to="/products" className="category-card" style={{ backgroundColor: '#FFD700' }}>
            🍎 Fruits
          </Link>
          <Link to="/products" className="category-card" style={{ backgroundColor: '#F0E68C' }}>
            🥛 Dairy
          </Link>
          <Link to="/products" className="category-card" style={{ backgroundColor: '#DEB887' }}>
            🥩 Meat
          </Link>
          <Link to="/products" className="category-card" style={{ backgroundColor: '#FFDAB9' }}>
            🥖 Bakery
          </Link>
          <Link to="/products" className="category-card" style={{ backgroundColor: '#87CEEB' }}>
            🥤 Beverages
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
