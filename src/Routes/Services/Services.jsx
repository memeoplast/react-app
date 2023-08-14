import React from "react";
import { productData } from "../../Components/Carousel/data";
import Service from "./Service";
import CTA from "../../Components/CTA/CTA";

const Services = () => {
  const service = productData.map((item) => {
    <Service
      name={item.name}
      //   image={item.imageurl}
      description={item.description}
      key={item.id}
    />;
  });
  return (
    <div className="block__content">
      <div className="content__text">{service}</div>
      <CTA />
    </div>
  );
};

export default Services;
