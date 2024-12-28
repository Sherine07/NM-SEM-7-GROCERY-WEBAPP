import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Assuming you're fetching product data by ID
    const fetchedProduct = {
      id: 1,
      name: 'Apple',
      description: 'Fresh apples',
      price: 1.2,
      image: '/images/apple.jpg',
    };

    setProduct(fetchedProduct); // Set product data based on ID
  }, [id]);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
