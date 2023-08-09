import $axios from "./config";
import axios from "axios";
import { store } from "../../App";

const adminAPI = {
  async loginAdmin(payload) {
    return $axios.post("/api/v1/auth/login", payload);
  },
  async logoutAdmin(payload) {
    return $axios.get("/api/admin/logout", payload);
  },
};
export default adminAPI;
