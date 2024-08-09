import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import CollectionInfo from "./Product";
import Hero from "../../shared/smallHero";
import DevAddRev from "./DesAddRev";
import Related from "./Related";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { RootState } from "../../../redux/store.config";
import {
  getProduct,
  getProducts,
} from "../../../redux/features/products/productSlice";
import { getCart } from "../../../redux/features/cart/cartSlice";

import { Helmet, HelmetProvider } from "react-helmet-async";

const loadFromLocalStorage = (key: any) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const CollectionItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [error, setError] = useState("");

  // const params = useParams();

  const { prod_id } = useParams<{ prod_id: string }>();
  console.log("Is this the correct stuff...", prod_id);
  // Ensure prod_id is always a string
  const productId: string = prod_id || "";

  console.log("Is this the correct stuff...", productId);

  // Ensure prod_id is always a string
  const productInfo = useAppSelector(
    (state: RootState) => state.product.productData
  );

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // const response = await axios.get("/api/products");
        const response = await dispatch(
          getProduct({ prod_id: productId })
        ).unwrap();
        console.log(
          "This si single product info call from products...",
          response.data
        );
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

    fetchProduct();
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // const response = await axios.get("/api/products");
        const response = await dispatch(getProducts()).unwrap();
        const cartresponse = await dispatch(getCart()).unwrap();
        console.log("This res from home call from products...", response.data);
        console.log("This res from home cart...", cartresponse.data);

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

  return (
    <HelmetProvider>
      <Helmet>
        <title>product - benkih</title>
      </Helmet>

      {/* <Hero currentLink={productInfo?.title} /> */}
      <CollectionInfo />
      <DevAddRev />
      <Related />
    </HelmetProvider>
  );
};

export default CollectionItem;
