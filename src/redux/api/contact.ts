import $axios from "./config";
import { ContactPayloadProps } from "../../types/types";
import axios from "axios";
// import { store } from "../../App";

console.log("This is axios...", $axios);
const contactAPI = {
  async addContact(payload: ContactPayloadProps) {
    console.log("reg payload :", payload);
    return $axios.post("/contacts/add", payload);
  },
};
export default contactAPI;
