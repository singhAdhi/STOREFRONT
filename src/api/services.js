import axios from "axios";
import { BASE_URL } from "../config";

const makeGetRequest = async ({ url, body }) => {
  return await axios
    .get(`${BASE_URL}/${url}`, body)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
const makePostRequest = async ({ url, body }) => {
  return await axios
    .post(`${BASE_URL}/${url}`, body)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
export { makeGetRequest, makePostRequest };
