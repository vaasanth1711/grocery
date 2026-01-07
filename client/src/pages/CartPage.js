import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/pages.css';

function CartPage() {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/cart');
      setCart(response.data);
    } catch (err) {
      console.log('Error fetching cart:', err);
      setCart({ items: [], totalPrice: 0 });
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/cart/${productId}`);
      setCart(response.data);
    } catch (err) {
      console.log('Error removing from cart:', err);
    }
  };

  const clearCart = async () => {
    try {
      const response = await axios.delete('/api/cart');
      setCart(response.data);
    } catch (err) {
      console.log('Error clearing cart:', err);
    }
  };

  if (loading) {
    return <div className="container"><div className="loading">Loading cart...</div></div>;
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.items && cart.items.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map(item => (
                <tr key={item.productId}>
                  <td>{item.productId?.name || 'Product'}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Total: ${cart.totalPrice?.toFixed(2) || '0.00'}</h3>
            <div className="cart-buttons">
              <button className="btn btn-primary" onClick={() => alert('Proceeding to checkout...')}>
                Checkout
              </button>
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/products" className="btn btn-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
