import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../styles/pages.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Bakery', 'Beverages', 'Snacks'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      console.log('Error fetching products:', err);
      // Set mock data for demo purposes
      setProducts([
        {
          _id: '1',
          name: 'Fresh Tomatoes',
          category: 'Vegetables',
          price: 3.99,
          description: 'Fresh red tomatoes',
          image: 'https://via.placeholder.com/200?text=Tomatoes'
        },
        {
          _id: '2',
          name: 'Red Apples',
          category: 'Fruits',
          price: 4.99,
          description: 'Crispy red apples',
          image: 'https://via.placeholder.com/200?text=Apples'
        },
        {
          _id: '3',
          name: 'Milk (1L)',
          category: 'Dairy',
          price: 2.99,
          description: 'Fresh pasteurized milk',
          image: 'https://via.placeholder.com/200?text=Milk'
        },
        {
          _id: '4',
          name: 'Chicken Breast',
          category: 'Meat',
          price: 8.99,
          description: 'Fresh chicken breast',
          image: 'https://via.placeholder.com/200?text=Chicken'
        },
        {
          _id: '5',
          name: 'Whole Wheat Bread',
          category: 'Bakery',
          price: 2.49,
          description: 'Freshly baked whole wheat bread',
          image: 'https://via.placeholder.com/200?text=Bread'
        },
        {
          _id: '6',
          name: 'Orange Juice',
          category: 'Beverages',
          price: 3.49,
          description: 'Fresh orange juice',
          image: 'https://via.placeholder.com/200?text=OJ'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="filters">
        <h3>Filter by Category:</h3>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div className="no-products">No products found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
