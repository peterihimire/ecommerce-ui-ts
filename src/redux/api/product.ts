import $axios from "./config";
import { ProductPayloadProps, } from "../../types/types";

// console.log("This is axios...", $axios);
const productAPI = {
  async getProduct(payload: ProductPayloadProps) {
    return $axios.get(`/products/get_product/${payload.prod_id}`);
  },

  async getProducts() {
    return $axios.get("/products/get_products");
  },

  async getProductsFilter(query: string) {
    return $axios.get(`/products/get_products_filter?${query}`);
  },
};
export default productAPI;
