import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

// ================= TOKEN FUNCTIONS =================

export const setAuthToken = (token) => {
  api.defaults.headers.common["Authorization"] = token;
};

export const removeAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};

export default api;