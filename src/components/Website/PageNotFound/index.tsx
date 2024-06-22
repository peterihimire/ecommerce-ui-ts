import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";

import { Helmet, HelmetProvider } from "react-helmet-async";

const PageNotFound: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>page not found - benkih</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero /> */}
      <Banner />
    </HelmetProvider>
  );
};

export default PageNotFound;
