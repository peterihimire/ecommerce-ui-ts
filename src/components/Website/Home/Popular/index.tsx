import React, { useState } from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";
import { RootState } from "../../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";

import styles from "./styles.module.scss";

const Popular: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );
  console.log("This is current product listings ...", productsList);

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
    <section className={`${styles.popular}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.popularTitle}`}>
          <h3>Popular this week</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
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
                addProd={addProductHandler}
                // likeProd={likeProductHandler}
                // infoProd={openModalHandler}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
