import $axios from "./config";
import { UserPayloadProps, VerifyPayloadProps } from "../../types/types";

console.log("This is axios...", $axios);
const userAPI = {
  async getUserInfo() {
    return $axios.get("/users/acct_info");
  },

  async uploadProfilePic(payload: FormData) {
    console.log("This is payload...", payload);
    return $axios.post("/users/upload/profile_picture", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
export default userAPI;
