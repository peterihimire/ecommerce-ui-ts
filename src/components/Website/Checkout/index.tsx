import React from "react";
import Hero from "../../shared/smallHero";
import Content from "./Content";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Collections: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - faq</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      <Hero home={`home`} currentLink={`checkout`} />
      <Content />
    </HelmetProvider>
  );
};

export default Collections;
