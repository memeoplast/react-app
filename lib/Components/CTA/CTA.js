import React from "react";
import "./CTA.css";
import Button__link from "../Button/button";
const CTA = () => {
  return dom("div", {
    className: "CTA__container"
  }, dom("div", {
    className: "CTA__text"
  }, "Get a quote today!", dom("div", {
    className: "CTA__subtext"
  }, "Get a non-binding quote based on your needs today.", " ")), dom("div", {
    className: "CTA__button-container"
  }, dom(Button__link, {
    text: "Contact Us",
    url: "/Contact"
  })));
};
export default CTA;