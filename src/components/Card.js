import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardStyle = styled.div`
  background-color: #add8e6;
  width: 200px;
  float: left;
  padding: 20px;
  margin: 30px;
  border-radius: 20px;
  text-align: center;
`;

const Card = (props) => {
  return (
    <CardStyle>
      <p>{props.show.name}</p>
      <br />
      <img
        style={{ width: "100%" }}
        src={props.show.image.medium}
        alt={props.show.name}
      />
      <br />
      <Link key={props.show.id} to={"/shows/" + props.show.id}>
        Details
      </Link>
    </CardStyle>
  );
};

export default Card;
