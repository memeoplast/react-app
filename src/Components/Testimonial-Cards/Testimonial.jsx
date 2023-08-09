import React from "react";
import Button from "../Button/button";

export default function Testimonial(props) {
  return (
    <div className="block__cards">
      <div className="card__primary">
        <div className="card__primary-subgrid">
          <p className="text__quote">{props.quote}</p>
        </div>
      </div>
      <div className="card__secondary">
        <div className="card__secondary-content">
          <div className="text__center">{props.company}</div>
          <div className="card__img-container">
            <img className="card__img" src={props.url} alt="Profile Picture" />
          </div>
          <p className="text__center">{props.name}</p>
          <Button text="View Case" url="Cases" />
        </div>
      </div>
    </div>
  );
}
