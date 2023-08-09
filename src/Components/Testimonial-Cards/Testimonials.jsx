import React from "react";
import "./Testimonials.css";
import { TestimonialData } from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonial = TestimonialData.map((item) => (
    <Testimonial
      name={item.name}
      imageurl={item.imageurl}
      company={item.company}
      quote={item.quote}
      key={item.id}
      siteurl={item.siteurl}
    />
  ));
  return (
    <div className="block__content">
      <div className="block__cards-container">{testimonial}</div>
    </div>
  );
};

export default Testimonials;
