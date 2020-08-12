import axios from "axios";

export const fetchSeriesApi = async () => {
  return await axios.get("http://api.tvmaze.com/shows");
};

// export const fetchSeriesApi = async () => {
//   return await axios.get("http://localhost:8080/shows");
// };

export const fetchSeriesByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}`);
};

export const fetchEpisodesByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/episodes`);
};

export const fetchStaffByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/staff`);
};

export const fetchSearchBySearchValueApi = async (value) => {
  return await axios.get(`http://localhost:8080/shows/searchresult/${value}`);
};
