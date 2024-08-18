import React, { useState, useEffect } from "react";
import ProductCard from "../../../shared/productcard";
import CartNav from "../../../shared/cartNav";
import Backdrop from "../../../shared/backdrop";
import Modal from "../../../shared/modal";
import { Link } from "react-router-dom";
import product1 from "../../../../assets/images/products/product1.png";
import { RootState } from "../../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import { CartPayloadProps, CartDataProps } from "../../../../types/types";
import { addToCart, getCart } from "../../../../redux/features/cart/cartSlice";

import styles from "./styles.module.scss";

const Sale: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<CartDataProps | null>(
    null
  );

  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );
  const cartInfo = useAppSelector((state: RootState) => state.cart.cartData);
  console.log("This is cart information...", cartInfo);
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

  const closeModalHandler = () => {
    console.log("Modal closed...");
    setShowModal(false);
    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  };
  return (
    <section className={`${styles.sale}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.saleTitle}`}>
          <h3>On Sale Product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div>

        <div className={`${styles.productDiv}`}>
          {productsList.slice(0, 4).map((product) => {
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

      {/* {showModal && (
        <Modal click={closeModalHandler}>
          <div className={`modal-children`}>
            <div className={`modal-img`}>
              <img src={product1} alt="" />
            </div>
            <div className={`modal-txt`}>
              <h3>iPhone 13 Pro Max</h3>
              <h6>$1400</h6>
              <button
                className="btn-primary btn-block"
                style={{ height: "40px", marginBottom: "10px" }}
              >
                Add to Cart
              </button>
              <Link to="/collections/1" className={`modal-link`}>
                View More Details
              </Link>
            </div>
          </div>
        </Modal>
      )} */}
    </section>
  );
};

export default Sale;
