import React from 'react';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">🛒 Grocery Store</h1>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
          </nav>
        </div>
      </header>
      <main className="main">
        <div id="router-outlet"></div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Grocery Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
