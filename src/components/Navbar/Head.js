import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";
import "./Navbar.css";

const Head = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Get user from Redux

  const handleLogout = () => {
    dispatch(removeUser()); // Clear Redux user state
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* <i className="fa-solid fa-font-awesome">
        </i> */}
        <img src="logo.png" style={{height:'60px',width:'60px'}} alt=""/>
        <Link to="/" className="logo-text">
        Picksy.!
        </Link>
      </div>
      <div className="menu">
        <div className="menu-links">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/Category" className="menu-item">Category</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/service" className="menu-item">Service</Link>
          <Link to="/cart" className="menu-item">cart</Link>
          <Link to="/blog" className="menu-item">Blog</Link>
        </div>
        {user ? (
          <div className="user-info">
            <span className="welcome-message">Welcome, {user.name}!</span>
            <button className="log-in" onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <Link to="/login">
            <button className="log-in">Log In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Head;
