import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">Autyra</h3>
          <p className="footer-tagline">
            Secure e-signatures & document conversions
          </p>
        </div>

        {/* Links */}
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Meta */}
        <div className="footer-meta">
          <small>  © {year} Autyra, made with ❤️. All rights reserved. </small>
        </div>
      </div>
    </footer>
  );
}