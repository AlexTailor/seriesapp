import axios from "axios";

export const fetchSeriesApi = async () => {
  return await axios.get("http://api.tvmaze.com/shows");
};

export const fetchSeriesByIdApi = async (id) => {
  return await axios.get(`http://api.tvmaze.com/shows/${id}`);
};

export const fetchEpisodesByIdApi = async (id) => {
  return await axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=episodes`);
};

export const fetchStaffByIdApi = async (id) => {
  return await axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=cast`);
};
