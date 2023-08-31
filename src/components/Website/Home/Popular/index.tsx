import React from "react";

import styles from "./styles.module.scss";

const Popular: React.FC = () => {
  return (
    <section className={`${styles.popular}`}>
      <div className="wrapper">
        <div>
          <h3>Popular this week</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Popular;
