import React from "react";

export default function Product(props) {
  return (
    <div className="product__card">
      <img className="product__image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
