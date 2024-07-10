import React, { useState, useEffect, useMemo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeHero from "./Hero";
import Categories from "./Categories";
import Popular from "./Popular";
import Explore from "./Explore";
import Latest from "./Latest";
import Choose from "./Choose";
import Sale from "./Sale";
import Flash from "./Flash";
import Discount from "./Discount";
import Testimonials from "./Testimonial";
import { RootState } from "../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { getProducts } from "../../../redux/features/products/productSlice";

// src/utils/localStorage.js
export const saveToLocalStorage = (key: any, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key: any) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [error, setError] = useState("");

  // const { items, loading, error } = useAppSelector((state) => state.products);
  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );
  console.log("This is current product listings ...", productsList);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // const response = await axios.get("/api/products");
        const response = await dispatch(getProducts()).unwrap();
        console.log("This res from home call from products...", response.data);
        // saveToLocalStorage("ecommerce_products", response.data);
        // setProducts(response);
      } catch (error: any) {
        console.log("This error from products...", error);
        setError(error.message);
      } finally {
        // dispatch(setLoading(false));
        setLoading(false);
      }
    };

    const localProducts = loadFromLocalStorage("ecommerce_products");
    console.log("This local products...", localProducts);
    if (localProducts) {
      setProducts(localProducts);
    } else {
      fetchProducts();
    }
  }, [dispatch]);

  // const memoizedItems = useMemo(() => items, [items]);
  console.log("This is the loading...", loading);

  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - home</title>
      </Helmet>

      <HomeHero />
      <Categories />
      <Popular />
      <Explore />
      <Latest />
      <Choose />
      <Flash />
      <Sale />
      <Discount />
      <Testimonials />
    </HelmetProvider>
  );
};

export default Home;
