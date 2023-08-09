import React from "react";
import Button from "../Button/button";
export default function Product(props) {
  return dom("div", {
    className: "product__card"
  }, dom("img", {
    className: "product__image",
    src: props.url,
    alt: "product image"
  }), dom("h2", {
    className: "product__heading"
  }, props.name), dom("p", {
    className: "product__info"
  }, props.description), dom(Button, {
    text: "Learn more",
    url: "Services"
  }));
}