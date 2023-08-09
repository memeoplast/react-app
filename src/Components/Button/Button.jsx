import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, url }) => {
  const handleScrollToElement = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      to={url}
      className="button__large"
      rel="noreferrer"
      onClick={() => handleScrollToElement}
    >
      {text}
    </Link>
  );
};

export default Button;
