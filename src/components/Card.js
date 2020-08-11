import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IdProviderContext } from "../contexts/IdProviderContext";
import "../style/Style.css";
import { DetailContext } from "../contexts/DetailProvider";

const CardStyle = styled.div`
  background-color: #add8e6;
  width: 200px;
  float: left;
  padding: 20px;
  margin: 30px;
  border-radius: 20px;
  text-align: center;
`;

const Root = styled.div`
  display: flex;
`;

const Card = (props) => {
  const { id, setshowId } = useContext(IdProviderContext);
  const { fetchSeriesById } = useContext(DetailContext);

  return (
    <section className="main-container">
      <div className="location" id="home">
        <div className="box">
          <Link
            onClick={() => setshowId(props.show.id)}
            to={"/shows/" + props.show.id}
          >
            <img src={props.show.image.medium} alt={props.show.name} />
          </Link>
        </div>
      </div>
    </section>

    // <CardStyle>
    //   <p>{props.show.name}</p>
    //   <br />
    //   <img
    //     style={{ width: "100%" }}
    //     src={props.show.image.medium}
    //     alt={props.show.name}
    //   />
    //   <br />
    //   <Link
    //     onClick={() => setshowId(props.show.id)}
    //     to={"/shows/" + props.show.id}
    //   >
    //     Details
    //   </Link>
    // </CardStyle></CardStyle>
  );
};

export default Card;
