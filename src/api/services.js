import axios from "./axios";
import { BASE_URL } from "../config";

const makeGetRequest = async ({ url, body }) => {
  return await axios
    .get(`${url}`, body ? body : null)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw new Error(err);
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
