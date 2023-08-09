import $axios from "./config";
import axios from "axios";
import { store } from "../../App";

const userAPI = {
  async registerUser(payload) {
    return $axios.post("/api/v1/auth/register", payload);
  },
  async verifyUser(payload) {
    return $axios.post(`/api/v1/auth/verify-email/${payload}`);
  },
  async loginUser(payload) {
    return $axios.post("/api/v1/auth/login", payload);
  },
  async logoutUser(payload) {
    return $axios.post("/api/v1/auth/logout", payload);
  },
  async getUserInfo() {
    return $axios.get("/api/v1/users/user");
  },
};
export default userAPI;
