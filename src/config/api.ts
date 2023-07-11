import axios from "axios";

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=[${import.meta.env.BASE_URL}]`,
  withCredentials: true,
});

export default api;
