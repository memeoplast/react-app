import React from "react";
import Button from "../Button/button";
export default function Testimonial(props) {
  return dom("div", {
    className: "block__cards"
  }, dom("div", {
    className: "card__primary"
  }, dom("div", {
    className: "card__primary-subgrid"
  }, dom("p", {
    className: "text__quote"
  }, props.quote))), dom("div", {
    className: "card__secondary"
  }, dom("div", {
    className: "card__secondary-content"
  }, dom("div", {
    className: "text__center"
  }, props.company), dom("div", {
    className: "card__img-container"
  }, dom("img", {
    className: "card__img",
    src: props.url,
    alt: "Profile Picture"
  })), dom("p", {
    className: "text__center"
  }, props.name), dom(Button, {
    text: "View Case",
    url: "Cases"
  }))));
}