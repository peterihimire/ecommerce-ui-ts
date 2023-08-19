import React from "react";
import "./styles.scss";

const HomeCategories: React.FC = () => {
  return (
    <section className={`home-categories`}>
      <div className="wrapper">
        <div className={`featured-head`}>
          <h3>Categories</h3>
        </div>
        <div className={`cat-carousel`}>Carousel</div>
      </div>
    </section>
  );
};

export default HomeCategories;
