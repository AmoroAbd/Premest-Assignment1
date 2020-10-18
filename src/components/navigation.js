import React from "react";

function Navigation(props) {
  return (
    <div>
      <div className="navigation">
        <div id="branding">Pre-Mest ssignment 1</div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#services"> Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navigation;
