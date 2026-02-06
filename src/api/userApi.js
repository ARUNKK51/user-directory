import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

const API = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = () => API.get("/users");

export const createUser = (data) =>
  API.post("/users", data);

export const updateUser = (id, data) =>
  API.put(`/users/${id}`, data);

export const deleteUser = (id) =>
  API.delete(`/users/${id}`);