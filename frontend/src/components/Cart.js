import React from 'react';
import { useCart } from '../context/CartContext'; // Ensure CartContext is imported
import { Link } from 'react-router-dom';
import './Cart.css'; // Import the custom CSS file

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, value) => {
    // Ensure the value is a valid number and greater than 0
    if (value < 1) return; // Prevent quantity from going below 1
    updateQuantity(id, value);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id); // Remove item from cart
  };

  const handleClearCart = () => {
    clearCart(); // Clear the entire cart
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/home">Shop Now</Link></p>
      ) : (
        <div className="cart-items">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Actions</span>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="cart-item-quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </div>
              <div className="cart-item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="cart-summary-details">
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className="cart-summary-actions">
            <button onClick={handleClearCart} className="clear-btn">Clear Cart</button>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
