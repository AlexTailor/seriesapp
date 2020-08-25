import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import SubNavBar from "../components/SubNavBar";
import axios from "axios";

const Detail = () => {
  const { main, fetchSeriesById } = useContext(DetailContext);
  const { showId } = useContext(IdProviderContext);
  fetchSeriesById(showId);

  const summary = main.summary
    ? main.summary
        .replace("<p>", "")
        .replace("</p>", "")
        .replace("<b>", "")
        .replace("</b>", "")
    : [];

  const pic = main.image ? main.image : [];

  fetch = async (id) => {
    await axios.post("http://localhost:8080/shows/firstPost", { id: showId });
  };

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
        <button type="submit" onClick={fetch}>
          {" "}
          Favourite{" "}
        </button>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Detail;
