import axios from "axios";

export const addToFavourite = (id) => {
  axios.post("http://localhost:8080/shows/firstPost", { id: id });
};
