import React from "react";
import Carousel from "react-multi-carousel";
import "../Carousel/Carousel.css";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";
const ResponsiveCarousel = () => {
  const product = productData.map(item => dom(Product, {
    name: item.name,
    url: item.imageurl,
    price: item.price,
    description: item.description,
    key: item.id
  }));
  return dom("div", {
    className: "block__content",
    id: "Offers"
  }, dom(Carousel, {
    swipeable: true,
    draggable: true,
    showDots: true,
    responsive: responsive,
    infinite: false,
    slidesToSlide: 1,
    rewind: true,
    rewindWithAnimation: true
  }, product));
};
export default ResponsiveCarousel;