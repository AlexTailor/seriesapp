import React, { useState } from "react";
import {
  fetchSeriesApi,
  fetchSeriesByIdApi,
  fetchEpisodesByIdApi,
  fetchStaffByIdApi,
  fetchSearchBySearchValueApi,
  fetchPersonsApi,
  fetchPersonsByNameApi,
} from "../api/apiCalls";

export const DetailContext = React.createContext();

export function DetailProvider(props) {
  const [series, setSeries] = useState([]);
  const [main, setMain] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [cast, setCast] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [inputName, setInputName] = useState([]);
  const [randomStaff, setRandomStaff] = useState([]);
  const [searchedPersons, setSearchedPersons] = useState([]);

  const fetchSeries = () => {
    fetchSeriesApi().then((data) => {
      setSeries(data.data);
    });
  };

  const fetchPersons = () => {
    fetchPersonsApi().then((data) => {
      setRandomStaff(data.data);
    });
  };

  const fetchSeriesById = (id) => {
    fetchSeriesByIdApi(id).then((data1) => setMain(data1.data));
  };

  const fetchEpisodesById = (id) => {
    fetchEpisodesByIdApi(id).then((data2) => setEpisodes(data2.data));
  };

  const fetchStaffById = (id) => {
    fetchStaffByIdApi(id).then((data3) => setCast(data3.data));
  };

  const fetchSearchBySearchValue = (value) => {
    fetchSearchBySearchValueApi(value).then((data) =>
      setSearchValue(data.data)
    );
  };

  const fetchPersonsByName = (name) => {
    fetchPersonsByNameApi(name).then((data) => setSearchedPersons(data.data));
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
        inputValue,
        setInputValue,
        randomStaff,
        fetchPersons,
        searchedPersons,
        fetchPersonsByName,
        inputName,
        setInputName,
      }}
    >
      {props.children}
    </DetailContext.Provider>
  );
}
