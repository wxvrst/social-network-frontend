import axios from "axios";

export const apiPublication = axios.create({ baseURL: "/api/publications" });
export const apiUser = axios.create({ baseURL: "/api/users" });