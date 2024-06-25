import React from "react";
// import SmallHero from "../../ui/smallHero";
import CollectionInfo from "./Product";
import Hero from "./Hero";
import DevAddRev from "./DesAddRev";
import Related from "./Related";

import { Helmet, HelmetProvider } from "react-helmet-async";

const CollectionItem = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>product - benkih</title>
      </Helmet>

      <Hero />
      <CollectionInfo />
      <DevAddRev />
      <Related />
    </HelmetProvider>
  );
};

export default CollectionItem;
