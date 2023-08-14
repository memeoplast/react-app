import { React, useEffect } from "react";

export default function Service(props) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="content__text" id={props.id}>
      <h2 className="heading__secondary">{props.name}</h2>
      <img className="image__default" src={props.url} alt="service image"></img>
      <p className="text__default">{props.description}</p>
    </div>
  );
}
