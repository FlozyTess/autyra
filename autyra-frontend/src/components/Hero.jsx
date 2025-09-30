import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Private & Secure E-Signatures</h1>
        <p>
          Upload, sign, and convert documents seamlessly — without sacrificing privacy.
        </p>
        <button className="hero__cta">Upload Document</button>
      </div>
    </section>
  );
}

export default Hero;
