import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import HomeHero from "./Hero";
import Categories from "./Categories";
import Popular from "./Popular";
import Explore from "./Explore";
import Latest from "./Latest";
import Choose from "./Choose";
import Sale from "./Sale";
import Flash from "./Flash";

const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - Benkih</title>
      </Helmet>

      <HomeHero />
      <Categories />
      <Popular />
      <Explore />
      <Latest />
      <Choose />
      <Flash />
      <Sale />
    </HelmetProvider>
  );
};

export default Home;
