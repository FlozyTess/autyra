import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const links = ["Home", "Sign", "Convert", "Dashboard"];

  return (
    <nav className="navbar">
      <div className="navbar__logo">Autyra</div>
      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
