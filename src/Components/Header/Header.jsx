import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="block__header">
      <div className="block__float-light">
        <h1 className="heading__primary">Hello World!</h1>
        <h3 className="heading__secondary">This is a Header.</h3>
      </div>
    </div>
  );
};

export default Header;
