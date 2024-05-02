import React, { useState } from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";

import styles from "./styles.module.scss";

const Latest: React.FC = () => {
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
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.latestTitle}`}>
          <h3>Latest product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div>

        <div className={`${styles.productDiv}`}>
          {products.slice(3, 11).map((product) => {
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
    </section>
  );
};

export default Latest;
