import axios from "axios";
import { setupAxiosInterceptors } from "../../utils/SetupAxiosInterceptor";
import store from "../store"; // Import your Redux store
import { logoutUser } from "../features/auth/authSlice"; // Import the logout action

// const baseURL = "https://ecommerce.benkih.com/api/ecommerce/v1/";
const baseURL = "http://localhost:4040/api/ecommerce/v1/";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

let $axios = axios.create({
  baseURL,
  headers: config.headers,
  withCredentials: config.withCredentials, // Add withCredentials to the Axios instance
});
setupAxiosInterceptors($axios);
// // Response interceptor to handle expired session
// $axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Token expired or unauthorized, dispatch logout action
//       store.dispatch(logoutUser());
//     }
//     return Promise.reject(error);
//   }
// );

export default $axios;
