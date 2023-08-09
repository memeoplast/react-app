import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, url }) => {
  return (
    <Link to={url} className="button__large" rel="noreferrer">
      {text}
    </Link>
  );
};

export default Button;
