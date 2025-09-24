import React from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      <nav className="navbar">
        <h2 className="logo">Autyra</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sign</a></li>
          <li><a href="#">Convert</a></li>
          <li><a href="#">Dashboard</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Private-first E-signatures & Document Conversion</h1>
        <p>Upload, sign, and download your documents securely with Autyra.</p>
        <button className="cta">Upload Document</button>
      </header>
    </div>
  );
}

export default LandingPage;
