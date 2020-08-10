import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import { useHttp } from "../hook/usehttp";
import { Link } from "react-router-dom";

const SubNavBar = () => {
  const { showId } = useContext(IdProviderContext);
  const { addMain, addEpisodes, addCast } = useContext(DetailContext);
  // delegate these fetch calls to Context level and export functions
  const [isLoading, fetchedData] = useHttp(
    `http://api.tvmaze.com/shows/${showId}?embed[]=episodes&embed[]=cast`,
    []
  );

  const main = fetchedData ? fetchedData.data : [];
  const episodes = fetchedData ? fetchedData.data._embedded.episodes : [];
  const cast = fetchedData ? fetchedData.data._embedded.cast : [];

  return (
    <div>
      <nav className="sub-nav">
        <Link
          onClick={() => addMain(main)}
          key={showId + "main"}
          to={"/shows/" + showId}
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
      </nav>
    </div>
  );
};
export default SubNavBar;
