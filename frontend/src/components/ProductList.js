import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: 'Apple',
        price: 1.2,
        description: 'Fresh apples',
        image: '/images/apple.jpg',
      },
      {
        id: 2,
        name: 'Banana',
        price: 0.8,
        description: 'Ripe bananas',
        image: '/images/banana.jpg',
      },
      {
        id: 3,
        name: 'Grapes',
        price: 1.0,
        description: 'Citrus fruit',
        image: '/images/grapes.jpg',
      },
      {
        id: 4,
        name: 'Carrot',
        price: 1.0,
        description: 'Vegetable',
        image: '/images/carrot.jpg',
      },
      {
        id: 4,
        name: 'Carrot',
        price: 1.0,
        description: 'Vegetable',
        image: '/images/carrot.jpg',
      },
      {
        id: 5,
        name: 'Potato',
        price: 0.5,
        description: 'Starchy tuber',
        image: '/images/potato.jpeg',
      },
      {
        id: 6,
        name: 'Milk',
        price: 1.5,
        description: 'Fresh cow\'s milk',
        image: '/images/milk.jpg',
      },
      {
        id: 7,
        name: 'Eggs',
        price: 2.0,
        description: 'Dozen fresh eggs',
        image: '/images/eggs.jpg',
      },
      {
        id: 8,
        name: 'Yogurt',
        price: 1.2,
        description: 'Creamy yogurt',
        image: '/images/yogurt.jpg',
      },
      {
        id: 9,
        name: 'Cheese',
        price: 2.5,
        description: 'Fresh cheese block',
        image: '/images/cheese.jpg',
      },
      {
        id: 10,
        name: 'Chicken',
        price: 3.5,
        description: 'Boneless chicken breast',
        image: '/images/chicken.jpg',
      },
      {
        id: 11,
        name: 'Wheat',
        price: 1.8,
        description: 'Organic wheat flour',
        image: '/images/wheat.jpg',
      },
      {
        id: 12,
        name: 'Chips',
        price: 1.0,
        description: 'Crispy potato chips',
        image: '/images/chips.jpg',
      },
      {
        id: 13,
        name: 'Bread',
        price: 1.0,
        description: 'Fresh loaf of bread',
        image: '/images/bread.jpg',
      },
      {
        id: 14,
        name: 'Tofu',
        price: 2.0,
        description: 'Soybean-based tofu',
        image: '/images/tofu.jpg',
      },
      {
        id: 15,
        name: 'Sauce',
        price: 1.5,
        description: 'Tomato-based sauce',
        image: '/images/sauce.png',
      },
      
    ];
    setProducts(fetchedProducts);
    console.log(fetchedProducts); // Log to inspect the fetched data
  }, []);

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
