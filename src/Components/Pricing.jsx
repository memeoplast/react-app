import React from "react";
import CTA from "./CTA/CTA.jsx";

const Pricing = () => {
  return (
    <div className="block__content" id="Pricing">
      <div className="content__text">
        <h2 className="heading__secondary">Pricing</h2>
        <p className="text__default">
          Our pricing is tailored to meet the specific needs of your business,
          ensuring you receive the best value for the services we offer. We
          believe in transparent and flexible pricing structures that
          accommodate businesses of all sizes. Rest assured, you&apos;ll find a
          package that aligns perfectly with your requirements and budget.
        </p>
        <p className="text__default">
          Contact us today to request a personalized quote and learn more about
          how InnovateBiz Solutions can empower your business to thrive in the
          ever-evolving market. Our team will be delighted to assist you and
          provide detailed insights into our pricing options. Let&apos;s embark
          on this journey of growth together!
        </p>
      </div>
      <CTA />
    </div>
  );
};

export default Pricing;
