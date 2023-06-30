import axios from "axios";

export const Api = axios.create({
  baseURL: "https://eliteconsultores-backend-production.up.railway.app/",
});
