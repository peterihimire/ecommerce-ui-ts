import $axios from "./config";
import { ContactPayloadProps } from "../../types/types";

const contactAPI = {
  async addContact(payload: ContactPayloadProps) {
    return $axios.post("/contacts/add", payload);
  },
};
export default contactAPI;
