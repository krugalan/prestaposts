import axios from "axios";
export const apiUsersUrl = import.meta.env.VITE_REACT_APP_API_URL_USERS;
export const apiPostsUrl = import.meta.env.VITE_REACT_APP_API_URL_POSTS;

export const HttpClientUsers = axios.create({
  baseURL: apiUsersUrl + "/api",
  timeout: 100000,
  headers: {
    "content-type": "application/json",
  },
});

export const HttpPostsUsers = axios.create({
  baseURL: apiPostsUrl,
  timeout: 100000,
  headers: {
    "content-type": "application/json",
  },
});
