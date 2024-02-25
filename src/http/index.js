import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const getPopularCategories = () => api.get("/jobs/popular-categories");

export const getRecentJobs = () => api.get("/jobs/latests");
