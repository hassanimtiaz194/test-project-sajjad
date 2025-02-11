import axios from "axios";

export const login = async (body) => {
  return await axios.post("/api/user/login", body, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
};

export const refreshToken = (body) => {
  return axios.post("/api/user/refreshToken", body);
};
