import React from "react";

import styles from "./styles.module.scss";

const Explore: React.FC = () => {
  return (
    <section className={`${styles.explore}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.exploreText}`}>
          <h3>Beautiful shoes makes you productive.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="btn-primary btn-medium btn-block">Discover more</button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
