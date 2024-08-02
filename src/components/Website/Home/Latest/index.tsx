import React, { useState } from "react";
import ProductCard from "../../../shared/productcard";
import CartNav from "../../../shared/cartNav";
import Backdrop from "../../../shared/backdrop";
import { RootState } from "../../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import { CartPayloadProps, CartDataProps } from "../../../../types/types";
import { addToCart, getCart } from "../../../../redux/features/cart/cartSlice";

import styles from "./styles.module.scss";

const Latest: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );
  console.log("This is current product listings ...", productsList);

  const addProductHandler = async (uuid: string) => {
    console.log("Add handler...");
    setLoading(true);
    try {
      const response = await dispatch(addToCart({ prod_id: uuid }));
      console.log("This add cart response... ", response);
      const cartresponse = await dispatch(getCart());
      console.log("Cart products...", cartresponse);

      setOpen(true);
      document.documentElement.classList.add("_fixed");
      document.body.classList.add("_fixed");
    } catch (error: any) {
      console.error("Failed to load cart:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const openModalHandler = () => {
  //   console.log("Modal opened...");
  //   setShowModal(true);
  //   document.documentElement.classList.add("_fixed");
  //   document.body.classList.add("_fixed");
  // };

  // const closeModalHandler = () => {
  //   console.log("Modal closed...");
  //   setShowModal(false);
  //   document.documentElement.classList.remove("_fixed");
  //   document.body.classList.remove("_fixed");
  // };
  return (
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.latestTitle}`}>
          <h3>Latest product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div>

        <div className={`${styles.productDiv}`}>
          {productsList.slice(0, 6).map((product) => {
            return (
              <ProductCard
                key={product.uuid}
                id={product.uuid}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                image={`http://localhost:4040/${product.images[0]}`}
                infoProd={product.uuid}
                addProd={() => addProductHandler(product.uuid)}
                // likeProd={likeProductHandler}
              />
            );
          })}
        </div>
      </div>

      <CartNav
        isOpen={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
    </section>
  );
};

export default Latest;
