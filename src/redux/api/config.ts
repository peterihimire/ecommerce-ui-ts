import axios from "axios";

const baseURL = "https://ecommerce.benkih.com/api/ecommerce/v1/";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

let $axios = axios.create({
  // ...config,
  baseURL,
  headers: config.headers,
});

export default $axios;
