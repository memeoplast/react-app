import { React, useEffect } from "react";
import "./Service.css";

export default function Service(props) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const element = document.getElementById(hash.slice(1));
    if (!element) return;

    // Get the height of the headline element
    const headlineHeight = element.querySelector(
      ".heading__secondary"
    ).offsetHeight;

    // Calculate the adjusted scroll position to show the headline
    const adjustedScrollPosition = element.offsetTop - headlineHeight;

    // Scroll to the adjusted position
    window.scrollTo({
      top: adjustedScrollPosition,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="block__content" id={props.id}>
      <h2 className="heading__secondary">{props.name}</h2>
      <div className="image__container">
        <img
          className="image__default"
          src={props.url}
          alt="service image"
        ></img>
      </div>
      <p className="text__default">{props.description}</p>
    </div>
  );
}
