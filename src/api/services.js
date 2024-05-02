import createAxiosInstance from "./axios";
import { ENDPOINTS_BASE_URL } from "../config";

const url = import.meta.env.REACT_APP_API_URL || "http://localhost:5173";
const shopApi = createAxiosInstance(url); //(ENDPOINTS_BASE_URL.shop);
const hotelApi = createAxiosInstance(url); //(ENDPOINTS_BASE_URL.hotel);
const flightApi = createAxiosInstance(url); //(ENDPOINTS_BASE_URL.flight);

export { shopApi, hotelApi, flightApi };
