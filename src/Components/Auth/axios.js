import axios from "axios";

export const BaseUrl = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
};
