import React from "react";
import "./CTA.css";
import Button__link from "../Button/button";

const CTA = () => {
  return (
    <div className="CTA__container">
      <div className="CTA__text">
        Get a quote today!
        <div className="CTA__subtext">
          Get a non-binding quote based on your needs today.{" "}
        </div>
      </div>
      <div className="CTA__button-container">
        <Button__link text="Contact Us" url="/Contact" />
      </div>
    </div>
  );
};

export default CTA;
