import $axios from "./config";
import { ProductPayloadProps, VerifyPayloadProps } from "../../types/types";

console.log("This is axios...", $axios);
const productAPI = {
  async getProduct(payload: ProductPayloadProps) {
    return $axios.get(`/products/get_product/${payload}`);
  },
  async getProducts() {
    return $axios.get("/products/get_products");
  },
  async getProductsFilter(filters: any) {
    const query = new URLSearchParams(filters).toString();
    return $axios.get(`/products/get_products_filter?${query}`);
  },
};
export default productAPI;
