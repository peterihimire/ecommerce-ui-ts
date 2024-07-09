import $axios from "./config";
import { UserPayloadProps,VerifyPayloadProps } from "../../types/types";
import axios from "axios";
// import { store } from "../../App";

console.log("This is axios...", $axios);
const userAPI = {
  // async registerUser(payload: UserPayloadProps) {
  //   console.log("reg payload :", payload);

  //   return $axios.post("/onboard/register", payload);
  // },
  // async verifyEmail(payload: VerifyPayloadProps) {
  //   return $axios.post(`/onboard/verify_email`, payload);
  // },
  // async loginUser(payload: UserPayloadProps) {
  //   return $axios.post("/auth/login", payload);
  // },
  // async logoutUser() {
  //   return $axios.post("/auth/logout");
  // },
  async getUserInfo() {
    return $axios.get("/users/acct_info");
  },
};
export default userAPI;
