import axios from "axios";

export const fetchSeriesApi = async () => {
  return axios.get("http://api.tvmaze.com/shows");
};

export const fetchSeriesById = async (id) => {
  return await axios.get(`http://api.tvmaze.com/shows/${id}`);
};

export const fetchEpisodesById = async (id) => {
  return await axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=episodes`);
};

export const fetchStaffById = async (id) => {
  return await axios.get(`http://api.tvmaze.com/shows/${id}?embed[]=cast`);
};
