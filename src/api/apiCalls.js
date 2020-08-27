import axios from "axios";

export const fetchSeriesApi = async () => {
  return await axios.get("http://localhost:8080/shows");
};

export const fetchStaffByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/staff`);
};

export const fetchSearchBySearchValueApi = async (value) => {
  return await axios.get(`http://localhost:8080/shows/searchresult/${value}`);
};

export const fetchPersonsApi = async (page) => {
  return await axios.get(`http://localhost:8080/staff/page/${page}`);
};

export const fetchPersonsByNameApi = async (name) => {
  return await axios.get(`http://localhost:8080/staff/search/${name}`);
};

// export const fetchCastCreditsByIdApi = async (id) => {
//   return await axios.get(`http://localhost:8080/staff/castcredit/${id}`);
// };

export const fetchSeasonsByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/season`);
};

export const fetchEpisodesByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/episodes`);
};

export const fetchSeasonEpisodeApi = async (id, num) => {
  return await axios.get(
    `http://localhost:8080/shows/${id}/season/${num}/episode`
  );
};

export const fetchFavoriteApi = async () => {
  return await axios.get(`http://localhost:8080/shows/favourites`);
};
