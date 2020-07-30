import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import { useHttp } from "../hook/usehttp";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { showId } = useContext(IdProviderContext);
  const { addMain, addEpisodes, addCast } = useContext(DetailContext);

  const [isLoading, fetchedData] = useHttp(
    `http://api.tvmaze.com/shows/${showId}?embed[]=episodes&embed[]=cast`,
    []
  );

  const main = fetchedData ? fetchedData.data : [];
  const episodes = fetchedData ? fetchedData.data._embedded.episodes : [];
  const cast = fetchedData ? fetchedData.data._embedded.cast : [];

  return (
    <div>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>{showId}</h1>
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
      |<h1>hello</h1>
    </div>
  );
};

export default Detail;
