import React from "react";
import HomeHero from "./Hero";
import Categories from "./Categories";
import Popular from "./Popular";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - Benkih</title>
      </Helmet>

      <HomeHero />
      <Categories />
      <Popular />
    </HelmetProvider>
  );
};

export default Home;
