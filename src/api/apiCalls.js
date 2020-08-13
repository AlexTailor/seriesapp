import axios from "axios";

export const fetchSeriesApi = async () => {
  return await axios.get("http://localhost:8080/shows");
};

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

export const fetchPersonsApi = async () => {
  return await axios.get("http://localhost:8080/staff");
};

export const fetchPersonsByNameApi = async (name) => {
  return await axios.get(`http://localhost:8080/staff/search/${name}`);
};

export const fetchPersonsByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/staff/${id}`);
};

export const fetchCastCreditsByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/staff/castcredit/${id}`);
};
