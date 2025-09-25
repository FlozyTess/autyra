import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
       <Navbar />
       <Hero />
       <Features />
    </div>
  );
}
        
export default LandingPage;
