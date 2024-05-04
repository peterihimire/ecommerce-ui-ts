import React from "react";
import Hero from "./Hero";
// import WhoWeAre from "./WhoWeAre";
import FaqData from "./FaqData";
import Explore from "./Explore";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Faq: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>contact - benkih</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      <Hero />

      <FaqData />
      <Explore />
    </HelmetProvider>
  );
};

export default Faq;
