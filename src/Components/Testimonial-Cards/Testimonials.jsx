import React from "react";
import "./Testimonials.css";
import { TestimonialData } from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonial = TestimonialData.map((item) => (
    <Testimonial
      name={item.name}
      url={item.imageurl}
      company={item.company}
      quote={item.quote}
      key={item.id}
    />
  ));
  return (
    <div className="block__content">
      <div className="block__cards-container">{testimonial}</div>
    </div>

    // old:
    // <div className="block__content">
    //   <h2 className="heading__secondary">This is a Body.</h2>
    //   <div className="content__text">
    //     <p className="text__default">
    //       Bavaria ipsum dolor sit amet oans, zwoa, gsuffa Radler Radler
    //       Mongdratzal Radi blärrd kloan i daad Leonhardifahrt: Schoo Weißwiaschd
    //       Xaver Gstanzl, Ramasuri vo de hob i an Suri schüds nei no a Maß
    //       Habedehre. Mim Radl foahn Reiwadatschi Biaschlegl unbandig damischa
    //       Meidromml do hogg di hera. Wos nia need dringma aweng naa Foidweg
    //       Oachkatzlschwoaf, am acht’n Tag schuf Gott des Bia! Umma kumm geh
    //       Steckerleis umma Schorsch nimma singd back mas?
    //     </p>
    //   </div>
    //   <CTA />
    // </div>
  );
};

export default Testimonials;
