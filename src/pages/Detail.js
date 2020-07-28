import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { useHttp } from "../hook/usehttp";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {
  const { showId } = useContext(IdProviderContext);

  const [isLoading, fetchedData] = useHttp(
    `https://api.tvmaze.com/shows/${showId}`,
    []
  );

  // const details = fetchedData ? fetchedData.data : [];
  const pic = fetchedData ? fetchedData.data.image : [];
  // const summ = fetchedData ? fetchedData.data.

  return fetchedData ? (
    <div className="container">
      <div className="header">
        <h1>{fetchedData.name}</h1>
        <br />
        <Link>Main</Link> | <Link>Episodes</Link> | <Link>Staff</Link>
      </div>
      <div className="container">
        <div className="card">
          <img alt={fetchedData.name} src={pic.medium} />
        </div>
        <div className="card">
          <p>{fetchedData.data.summary}</p>
        </div>
      </div>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default Detail;
