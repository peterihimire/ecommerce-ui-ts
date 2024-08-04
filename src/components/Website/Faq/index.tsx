import React from "react";
import Hero from "../../shared/smallHero";
import FaqData from "./FaqData";
import Explore from "./Explore";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Faq: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - faq</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero home={`home`} currentLink={`FAQ`} /> */}

      <FaqData />
      <Explore />
    </HelmetProvider>
  );
};

export default Faq;
