import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <i className="fab fa-react"></i> {/* Replace with your logo */}
          <Link href="#">Picksy.!</Link>
        </div>
        <div className="footer-menu">
          <div className="menu-links">
            <Link href="#">About Us</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
          <div className="social-icons">
            <Link href="#" className="icon">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="icon">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="icon">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
