import React from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";

import styles from "./styles.module.scss";

const Popular: React.FC = () => {
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
          {products.slice(0, 4).map((product) => {
            return (
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.images[0]}
                // infoProd={openModalHandler}
                // addProd={addProductHandler}
                // likeProd={likeProductHandler}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
