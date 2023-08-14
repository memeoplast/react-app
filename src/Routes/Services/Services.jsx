import React from "react";
import { productData } from "../../Components/Carousel/data";
import Service from "./Service";
import CTA from "../../Components/CTA/CTA";

const Services = () => {
  const services = productData.map((item) => (
    <Service
      name={item.name}
      url={item.imageurl}
      description={item.description}
      key={item.id}
      id={item.id}
    />
  ));
  return (
    <div className="block__content">
      <div className="content__text">{services}</div>
      <CTA />
    </div>
  );
};

export default Services;
