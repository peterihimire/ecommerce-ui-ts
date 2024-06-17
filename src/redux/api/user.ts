import $axios from "./config";
import { UserPayloadProps } from "../../types/types";
import axios from "axios";
// import { store } from "../../App";

console.log("This is axios...", $axios);
const userAPI = {
  async registerUser(payload: UserPayloadProps) {
    return $axios.post("/onboard/register", payload);
  },
  async verifyUser(payload: any) {
    return $axios.post(`/onboardverify_email/${payload}`);
  },
  async loginUser(payload: UserPayloadProps) {
    return $axios.post("/auth/login", payload);
  },
  async logoutUser() {
    return $axios.post("/auth/logout");
  },
  async getUserInfo() {
    return $axios.get("/users/acct_info");
  },
};
export default userAPI;
