import $axios from "./config";
import { UserPayloadProps, VerifyPayloadProps } from "../../types/types";

console.log("This is axios...", $axios);
const userAPI = {
  async getUserInfo() {
    return $axios.get("/users/acct_info");
  },
};
export default userAPI;
