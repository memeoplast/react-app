import React from "react";

export default function Product(props) {
  return (
    <div className="product__card">
      <img className="product__image" src={props.url} alt="product image" />
      <h2 className="product__heading">{props.name}</h2>
      <p className="product__info">{props.description}</p>
    </div>
  );
}
