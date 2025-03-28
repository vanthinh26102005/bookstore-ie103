import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api", // link tới backend
});

export default API;
