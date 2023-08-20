import React from "react";
import HomeHero from "./Hero";
import HomeCategories from "./HomeCategories";
// import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <div className={`homepage`}>
      {/* <Helmet>
        <title>Home - Benkih</title>
      </Helmet> */}

      <HomeHero />
      <HomeCategories />
    </div>
  );
};

export default Home;
