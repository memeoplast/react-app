import React from "react";
import Carousel from "react-multi-carousel";
import "../Carousel/Carousel.css";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";

const ResponsiveCarousel = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      description={item.description}
      key={item.id}
    />
  ));

  return (
    <div className="block__content" id="Offers">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={false}
        slidesToSlide={1}
        rewind={true}
        rewindWithAnimation={true}
      >
        {product}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
