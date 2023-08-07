import React from "react";
import "./Header.css";

const Header = ({ isDark }) => {
  return (
    <div className={`block__header ${isDark && "mode--dark"}`} id="Header">
      <div className="block__float-light">
        <h1 className="heading__primary">InnovaSphere</h1>
        <h3 className="heading__secondary"></h3>
      </div>
    </div>
  );
};

export default Header;
