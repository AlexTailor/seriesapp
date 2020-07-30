import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import { useHttp } from "../hook/usehttp";
import { Link } from "react-router-dom";

const Detail = () => {
  const { showId } = useContext(IdProviderContext);
  const { addMain, addEpisodes, addCast } = useContext(DetailContext);

  const [isLoading, fetchedData] = useHttp(
    `http://api.tvmaze.com/shows/${showId}?embed[]=episodes&embed[]=cast`,
    []
  );

  const main = fetchedData ? fetchedData.data : [];
  const episodes = fetchedData ? fetchedData.data._embedded.episodes : [];
  const cast = fetchedData ? fetchedData.data._embedded.cast : [];
  const pic = fetchedData ? fetchedData.data.image : [];

  console.log(main);

  return (
    <div className="container">
      <Link
        onClick={() => addMain(main)}
        key={showId + "main"}
        to={"/shows/" + showId + "/main"}
      >
        Main
      </Link>{" "}
      |
      <Link
        onClick={() => addEpisodes(episodes)}
        key={showId + "episodes"}
        to={"/shows/" + showId + "/episodes"}
      >
        Episodes
      </Link>{" "}
      |
      <Link
        onClick={() => addCast(cast)}
        key={showId + "staff"}
        to={"/shows/" + showId + "/staff"}
      >
        Staff
      </Link>{" "}
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
