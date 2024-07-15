import $axios from "./config";
import { UserPayloadProps, VerifyPayloadProps } from "../../types/types";

const orderAPI = {
  async getUserInfo() {
    return $axios.get("/users/acct_info");
  },
};
export default orderAPI;
