import { React, useEffect } from "react";

export default function Case(props) {
  const splitResultSentence = props.results
    .split(";")
    .map((sentence) => sentence.trim());

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="content__text" id={props.id}>
      <h2 className="heading__secondary">{props.headline}</h2>
      <h4 className="heading__quaternary">Challenge</h4>
      <p className="text__default">{props.challenge}</p>
      <h4 className="heading__quaternary">Solution</h4>
      <p className="text__default">{props.solution}</p>
      <h4 className="heading__quaternary">Results</h4>
      <ul>
        {splitResultSentence.map((sentence, index) => (
          <li className="list__default" key={`${props.id}-${index}`}>
            {sentence}
          </li>
        ))}
      </ul>
      <h4 className="heading__quaternary">Conclusion</h4>
      <p className="text__default">{props.conclusion}</p>
    </div>
  );
}
