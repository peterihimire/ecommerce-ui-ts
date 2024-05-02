import React, { useState } from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";
import CartNav from "../../../shared/cartNav";
import Backdrop from "../../../shared/backdrop";

import styles from "./styles.module.scss";

const Sale: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const addProductHandler = () => {
    console.log("Add handler...");
    setOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const openModalHandler = () => {
    console.log("Modal opened...");
    setShowModal(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
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
          {products.slice(1, 9).map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.images[0]}
                infoProd={openModalHandler}
                addProd={addProductHandler}
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

export default Sale;
