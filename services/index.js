import axios from "axios";

const baseUrl = "http://209.141.46.44:8081";

export const login = async (body) => {
  return await axios.post(`${baseUrl}/api/v1/auth/login`, body, {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
};
export const refreshToken = (body) => {
  return axios.post("/api/user/refreshToken", body);
};

export const signUpUser = (body) => {
  return axios.post(`${baseUrl}/api/v1/user/signup`, body);
};

export const fetchUsers = (params) => {
  const token = localStorage.getItem("accessToken");
  return axios.get(`${baseUrl}/api/v1/user/users`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserProfile = (body) => {
  const token = localStorage.getItem("accessToken");
  return axios.post(`${baseUrl}/api/v1/user/updateUserProfile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteUser = (userId) => {
  const token = localStorage.getItem("accessToken");
  return axios.post(
    `${baseUrl}/api/v1/auth/deleteUser/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
