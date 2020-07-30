import React from "react";
import "../style/Style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: black;
  width: 300px;
  display: inline-block;
  vertical-align: baseline;

  text-align: center;
`;

const CardStyle2 = styled.div`
  background-color: black;
  width: 1000px;
  display: inline-block;
  vertical-align: baseline;
  margin-left: 100px;
  text-align: left;
`;

const Episode = (props) => {
  const summary = props.episode.summary.replace("<p>", "");
  const finished = summary.replace("</p>", "");

  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center" }}>
        <h2>{props.episode.name}</h2>
      </div>
      <CardStyle>
        <img
          style={{ height: "auto" }}
          alt={props.episode.name}
          src={props.episode.image.medium}
        />
      </CardStyle>
      <CardStyle2>{finished}</CardStyle2>
    </div>
  );
};

{
  /* <div>
      <p>{props.episode.name}</p>
      <img alt={props.episode.name} src={props.episode.image.medium} />
      {props.episode.summary}
    </div> */
}

export default Episode;
