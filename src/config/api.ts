import axios from "axios";

const api = axios.create({
  baseURL: `https://www.omdbapi.com`,
});

export type TResponse<T> = {
  data: T;
  status: number;
  statusCode: string;
};

export default api;
