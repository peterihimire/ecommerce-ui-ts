import $axios from "./config";
import {
  CartPayloadProps,
  CartUpdateProps,
  VerifyPayloadProps,
} from "../../types/types";

const cartAPI = {
  async addToCart(payload: CartPayloadProps) {
    return $axios.post("/carts/add", payload);
  },

  async getCart() {
    return $axios.get("/carts/get_cart");
  },

  async updateCart(payload: CartUpdateProps) {
    return $axios.patch("/carts/update-cart-product", payload);
  },
  async deleteCartProd(payload: string) {
    return $axios.delete(`/carts/delete_cart_prod/${payload}`);
  },
};
export default cartAPI;
