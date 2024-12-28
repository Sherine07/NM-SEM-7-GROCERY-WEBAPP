import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logoutUser } = useUser(); // Access user data and logout function

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Fresh Basket</Link>
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        {!user ? (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <span>Welcome, {user.name}!</span> {/* Display user name */}
            <button onClick={logoutUser}>Logout</button> {/* Logout button */}
          </>
        )}
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
