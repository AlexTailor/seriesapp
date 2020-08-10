import React, { useState } from "react";
import { fetchSeriesApi } from "../api/apiCalls";

export const DetailContext = React.createContext();

export function DetailProvider(props) {
  const [series, setSeries] = useState([]);
  const [main, setMain] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [cast, setCast] = useState([]);
  const addMain = (main) => {
    setMain({ main });
  };

  const fetchSeries = () => {
    fetchSeriesApi.then((data) => setSeries());
  };

  const fetchSeriesById = (id) => {
    fetchSeriesById(id).then((data) => setMain());
  };

  const addEpisodes = (episodes) => {
    setEpisodes({ episodes });
  };
  const addCast = (cast) => {
    setCast({ cast });
  };

  return (
    <DetailContext.Provider
      value={{
        series,
        fetchSeries,
        main,
        addMain,
        episodes,
        addEpisodes,
        cast,
        addCast,
      }}
    >
      {props.children}
    </DetailContext.Provider>
  );
}
