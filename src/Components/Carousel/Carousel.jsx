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
      price={item.price}
      description={item.description}
      key={item.id}
    />
  ));

  return (
    <div className="block__content" id="Landing__Products">
      <h3 className="heading__secondary">Products</h3>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
      >
        {product}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
