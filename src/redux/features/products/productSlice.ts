import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import productAPI from "../../api/product";
import { UserResponseProps, ProductPayloadProps } from "../../../types/types";
import qs from "qs";
interface ProductData {
  price: number;
  oldPrice: number;
  title: string;
  slug: string;
  images: string[];
  color: string;
  reviews?: string[];
  categories: string[];
  flashSale: boolean;
  featured: boolean;
  popular: boolean;
  brand: string;
  countInStock: number;
  desc: string;
  size: string;
  uuid: string;
}

interface SearchedData {
  currentPage: number;
  totalPage: number;
  totalItems: number;
  productRecords: ProductData[] | null;
}

interface ProductState {
  loading: boolean;
  error: string | null;
  items: ProductData[];
  searchedItems: SearchedData | null;
  productData: ProductData | null;
}

interface GetProductsFilterArg {
  page?: number;
  limit?: number;
  filter?: {
    brand?: string;
    size?: string;
    price?: string;
    categories?: string[];
    color?: string;
    minPrice?: number;
    maxPrice?: number;
  };
}

const productDataString = localStorage.getItem("ecommerce_products");
const productData: ProductData[] = productDataString
  ? JSON.parse(productDataString)
  : [];

export const getProduct = createAsyncThunk(
  "products/get_product",
  async (payload: ProductPayloadProps, thunkApi) => {
    console.log("my reg payload: ", payload);
    try {
      const response = await productAPI.getProduct(payload);
      console.log("This singyyfrom products...", response.data.data);
      const data = response.data.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/get_products",
  async (_, thunkApi) => {
    try {
      const response = await productAPI.getProducts();
      console.log("This res from main call from products...", response.data);

      const data = response.data.data;

      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getProductsFilter = createAsyncThunk(
  "products/filter",
  async (params: GetProductsFilterArg = {}, thunkApi) => {
    console.log("My filter params: ", params);

    const { page, limit, filter } = params;
    const pageNum = page ?? 1;
    const pageSize = limit ?? 3;

    const queryParams: Record<string, string> = {
      page: pageNum.toString(),
      limit: pageSize.toString(),
      ...Object.entries(filter || {}).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>),
    };

    const query = new URLSearchParams(queryParams).toString();

    try {
      const response = await productAPI.getProductsFilter(query);
      console.log("This res from filter mann...", response.data.data);
      const data = response.data.data;
      // localStorage.setItem("ecommerce_products", JSON.stringify(data.data));
      return data;
    } catch (error: any) {
      console.log("Error yeah: ", error.response);
      const message = error?.response?.data?.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<UserResponseProps>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  items: productData || [],
  searchedItems: null,
  productData: null,
} as ProductState;

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(getProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getProductsFilter.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProductsFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedItems = action.payload;
      })
      .addCase(
        getProductsFilter.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default userSlice.reducer;
