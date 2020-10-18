import React from "react";
import Navigation from "./navigation";

function Header(props) {
  return (
    <div>
      <div id="header">
        <div className="menu">
          <Navigation />
        </div>
      </div>
    </div>
  );
}
export default Header;
