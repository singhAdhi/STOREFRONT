import axios from "axios";
import { BASE_URL } from "../config";

const instance = axios.create({
  // baseURL: "/public/dummyApiData",
});

instance.interceptors.request.use(
  (config) => {
    return new Promise((resolve) => setTimeout(() => resolve(config), 1000)); //added delay for demo
    // if (localStorage.getItem("token")) {
    //   config.headers["Authorization"] = `Bearer ${localStorage.getItem(
    //     "token"
    //   )}`;
    // }
    // return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    // if (error.response.status == 401) {
    //   location.replace("/signin");
    //   localStorage.removeItem("isLoggedIn");
    //   localStorage.removeItem("email");
    //   localStorage.removeItem("token");
    // }
    return Promise.reject(error);
  }
);

export default instance;
