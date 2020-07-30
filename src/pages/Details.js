import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import { useHttp } from "../hook/usehttp";
import { Link } from "react-router-dom";
import SubNavBar from "../components/SubNavBar";

const Detail = () => {
  const { showId } = useContext(IdProviderContext);

  const [isLoading, fetchedData] = useHttp(
    `http://api.tvmaze.com/shows/${showId}?embed[]=episodes&embed[]=cast`,
    []
  );

  const main = fetchedData ? fetchedData.data : [];
  const pic = fetchedData ? fetchedData.data.image : [];

  return (
    <div className="mainCont">
      <SubNavBar />
      <br />
      <div className="details">
        <p>{main.name}</p>
        <div className="card">
          <p>Genres: {main.genres}</p>
          <p>Type: {main.type}</p>
          <p>Status: {main.status}</p>
        </div>
        <img alt={main.name} src={pic.medium} />
        <p>{main.summary}</p>
      </div>
    </div>
  );
};

export default Detail;
