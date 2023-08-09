import React from "react";
import Case from "./Case";
import CTA from "../../Components/CTA/CTA";
import { TestimonialData } from "../../Components/Testimonial-Cards/data";
import Header from "../../Components/Header/Header";

const Cases = () => {
  const cases = TestimonialData.map((item) => (
    <Case
      key={item.id}
      id={item.id}
      url={item.url}
      headline={item.headline}
      challenge={item.challenge}
      solution={item.solution}
      results={item.results}
      conclusion={item.conclusion}
    />
  ));
  return (
    <div className="block__content">
      <Header heading="Case Studies" />
      <div className="content__text">{cases}</div>
      <CTA />
    </div>
  );
};

export default Cases;
