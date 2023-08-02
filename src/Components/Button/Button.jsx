import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button__link = ({ text, url }) => {
  return (
    <Link to={url} className="button__big" rel="noreferrer">
      {text}
    </Link>
  );
};

export default Button__link;
