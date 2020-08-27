import React, { useContext, useState, useEffect } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import SubNavBar from "../components/SubNavBar";
import axios from "axios";

const Detail = () => {
  const [main, setMain] = useState([]);
  const [newRate, setNewRate] = useState([]);
  const { showId } = useContext(IdProviderContext);

  useEffect(() => {
    axios.get(`http://localhost:8080/shows/${showId}`).then((response) => {
      setMain(response.data);
      setNewRate(response.data.rating.average);
    });
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

  const postData = () => {
    axios
      .post("http://localhost:8080/shows/firstPost", {
        showId: showId,
        seriesRating: rating,
      })
      .then((data) => (rating = data.data));
  };

  const postDownVote = () => {
    axios
      .post("http://localhost:8080/shows/vote/down", {
        showId: showId,
        seriesRating: rating,
      })
      .then((data) => setNewRate(data.data));
  };

  const postUpVote = () => {
    axios
      .post("http://localhost:8080/shows/vote/up", {
        showId: showId,
        seriesRating: rating,
      })
      .then((response) => setNewRate(response.data));
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
          <p>Rating: {newRate}</p>
        </div>
        <img alt={main.name} src={pic.medium} />
        <button type="submit" onClick={postData}>
          {" "}
          Favourite{" "}
        </button>
        <button onClick={postDownVote}>Down</button>
        <button onClick={postUpVote}>Up</button>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Detail;
