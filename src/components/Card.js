import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IdProviderContext } from "../contexts/IdProviderContext";

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
  const { setshowId } = useContext(IdProviderContext);

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
      <Link
        onClick={() => setshowId(props.show.id)}
        to={"/show/" + props.show.id}
      >
        Details
      </Link>
    </CardStyle>
  );
};

export default Card;
