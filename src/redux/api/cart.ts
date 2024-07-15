import $axios from "./config";
import { CartPayloadProps, VerifyPayloadProps } from "../../types/types";

const cartAPI = {
  async addToCart(payload: CartPayloadProps) {
    return $axios.post("/carts/add", payload);
  },

  async getCart() {
    return $axios.get("/carts/get_cart");
  },

  async updateCart(payload: CartPayloadProps) {
    return $axios.patch("/carts/update_prod_qty", payload);
  },
  async deleteCartProd(payload: CartPayloadProps) {
    return $axios.delete(`/carts/delete_cart_prod/${payload}`);
  },
};
export default cartAPI;
