import createAxiosInstance from "./axios";
import { ENDPOINTS_BASE_URL } from "../config";

let url = `http://localhost:${window.location.port}`;
const shopApi = createAxiosInstance(url); //(ENDPOINTS_BASE_URL.shop);
const hotelApi = createAxiosInstance(url); //(ENDPOINTS_BASE_URL.hotel);
const flightApi = createAxiosInstance(url); //(ENDPOINTS_BASE_URL.flight);

export { shopApi, hotelApi, flightApi };
