import React, { useContext, useState, useEffect } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";
import SubNavBar from "../components/SubNavBar";
import axios from "axios";

const Detail = () => {
  const { main, fetchSeriesById } = useContext(DetailContext);
  const [newRate, setNewRate] = useState([]);
  const { showId } = useContext(IdProviderContext);

  useEffect(() => {
    fetchSeriesById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showId]);

  const summary = main.summary
    ? main.summary
        .replace("<p>", "")
        .replace("</p>", "")
        .replace("<b>", "")
        .replace("</b>", "")
    : [];
  const pic = main.image ? main.image : [];
  let rating = main.rating ? main.rating.average : [];

  const postFavouriteSeries = () => {
    axios
      .post(
        "http://localhost:8080/shows/firstPost",
        {
          showId: showId,
          seriesRating: rating,
        },
        {
          credentials: "same-origin",
          headers: {
            Authorization: "Bearer " + document.cookie.split("=")[1],
          },
        }
      )
      .then((data) => (rating = data.data));
  };

  const postDownVote = () => {
    axios
      .post(
        "http://localhost:8080/shows/vote/down",
        {
          showId: showId,
          seriesRating: rating,
        },
        {
          credentials: "same-origin",
          headers: {
            Authorization: "Bearer " + document.cookie.split("=")[1],
          },
        }
      )

      .then((data) => setNewRate(data.data));
  };

  const postUpVote = () => {
    axios
      .post(
        "http://localhost:8080/shows/vote/up",
        {
          showId: showId,
          seriesRating: rating,
        },
        {
          credentials: "same-origin",
          headers: {
            Authorization: "Bearer " + document.cookie.split("=")[1],
          },
        }
      )
      .then((response) => setNewRate(response.data));
  };

  return (
    <div className="mainCont">
      <SubNavBar />
      <br />
      <p>{main.name}</p>
      <div className="details">
        <div>
          <img alt={main.name} src={pic.medium} />
        </div>
        <div className="card">
          <p>Genres: {main.genres}</p>
          <p>Type: {main.type}</p>
          <p>Status: {main.status}</p>
          <p>Rating: {newRate}</p>
          <button type="submit" onClick={postFavouriteSeries}>
            {" "}
            Favourite{" "}
          </button>
          <button onClick={postDownVote}>Down</button>
          <button onClick={postUpVote}>Up</button>
        </div>
      </div>
      <p>{summary}</p>
    </div>
  );
};

export default Detail;
