import React from "react";
import HomeHero from "./hero";
import FeaturedProduct from "./featuredProduct";
import NewArrival from "./newArrivals";
import HomeCategories from "./homeCategories";
import HomeBrands from "./homeBrands";
import NewsLetter from "./newsLetter";
// import Reviews from "./reviews";
import { Helmet } from "react-helmet";

import "./styles.scss";

const HomePage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Home - Benkih</title>
      </Helmet>

      <HomeHero />
      <HomeCategories />
      <HomeBrands />
      <FeaturedProduct />
      <NewArrival />
      {/* <Reviews /> */}
      <NewsLetter />
    </div>
  );
};

export default HomePage;
