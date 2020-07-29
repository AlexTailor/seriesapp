import React from "react";

const Episode = (props) => {
  return (
    <div>
      <p>{props.episode.name}</p>
      <img alt={props.episode.name} src={props.episode.image.medium} />
      {props.episode.summary}
    </div>
  );
};

export default Episode;
