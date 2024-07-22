import $axios from "./config";
import { UserPayloadProps, VerifyPayloadProps } from "../../types/types";

const authAPI = {
  async registerUser(payload: UserPayloadProps) {
    return $axios.post("/onboard/register", payload);
  },

  // async googleAuth(user: any) {
  //   return $axios.get(`/auth/google/callback`, {
  //     params: {
  //       user: JSON.stringify(user),
  //     },
  //   });
  // },

  async verifyEmail(payload: VerifyPayloadProps) {
    return $axios.post(`/onboard/verify_email`, payload);
  },

  async loginUser(payload: UserPayloadProps) {
    return $axios.post("/auth/login", payload);
  },

  async logoutUser() {
    return $axios.post("/auth/logout");
  },
};
export default authAPI;
