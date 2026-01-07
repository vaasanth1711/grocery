import React, { useState } from 'react';
import axios from 'axios';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  const addToCart = async () => {
    try {
      setAdding(true);
      await axios.post('/api/cart/add', {
        productId: product._id,
        quantity: parseInt(quantity)
      });
      alert('Product added to cart!');
      setQuantity(1);
    } catch (err) {
      console.log('Error adding to cart:', err);
      alert('Failed to add product to cart');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <div className="product-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <div className="quantity-selector">
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={addToCart}
            disabled={adding}
          >
            {adding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
