import React from "react";
import HomeHero from "./hero";
import HomeCategories from "./homeCategories";
import { Helmet } from "react-helmet-async";

const HomePage: React.FC = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Home - Benkih</title>
      </Helmet>

      <HomeHero />
      <HomeCategories />
    </div>
  );
};

export default HomePage;
