import axios from "axios";

export const api_key = "7c28f5cb7e06c326f5ceec67d5ff601c";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
