import React, { useState } from "react";
import {
  fetchSeriesApi,
  fetchSeriesByIdApi,
  fetchEpisodesByIdApi,
  fetchStaffByIdApi,
  fetchSearchBySearchValueApi,
} from "../api/apiCalls";

export const DetailContext = React.createContext();

export function DetailProvider(props) {
  const [series, setSeries] = useState([]);
  const [main, setMain] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [cast, setCast] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const fetchSeries = () => {
    fetchSeriesApi().then((data) => {
      setSeries(data.data);
    });
  };

  // const fetchSeries = () => {
  //   fetchSeriesApi().then((data) => console.log(data));
  // };

  const fetchSeriesById = (id) => {
    fetchSeriesByIdApi(id).then((data1) => setMain(data1.data));
  };

  const fetchEpisodesById = (id) => {
    fetchEpisodesByIdApi(id).then((data2) => setEpisodes(data2.data));
  };

  const fetchStaffById = (id) => {
    fetchStaffByIdApi(id).then((data3) => setCast(data3.data._embedded.cast));
  };

  const fetchSearchBySearchValue = (value) => {
    fetchSearchBySearchValueApi(value).then((data) =>
      setSearchValue(data.data)
    );
  };

  return (
    <DetailContext.Provider
      value={{
        series,
        fetchSeries,
        main,
        fetchSeriesById,
        episodes,
        fetchEpisodesById,
        cast,
        fetchStaffById,
        searchValue,
        fetchSearchBySearchValue,
      }}
    >
      {props.children}
    </DetailContext.Provider>
  );
}
