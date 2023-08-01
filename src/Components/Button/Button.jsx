import React from "react";
import "./Button.css";

const Button__link = ({ text, url }) => {
  return (
    <a href={url} target="_blank" className="button__big" rel="noreferrer">
      {text}
    </a>
  );
};

export default Button__link;
