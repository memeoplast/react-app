import React from "react";
import CTA from "./CTA/CTA.jsx";
const Pricing = () => {
  return dom("div", {
    className: "block__content",
    id: "Pricing"
  }, dom("div", {
    className: "content__text"
  }, dom("h2", {
    className: "heading__secondary"
  }, "Pricing"), dom("p", {
    className: "text__default"
  }, "Our pricing is tailored to meet the specific needs of your business, ensuring you receive the best value for the services we offer. We believe in transparent and flexible pricing structures that accommodate businesses of all sizes. Rest assured, you'll find a package that aligns perfectly with your requirements and budget."), dom("p", {
    className: "text__default"
  }, "Contact us today to request a personalized quote and learn more about how InnovateBiz Solutions can empower your business to thrive in the ever-evolving market. Our team will be delighted to assist you and provide detailed insights into our pricing options. Let's embark on this journey of growth together!")), dom(CTA, null));
};
export default Pricing;