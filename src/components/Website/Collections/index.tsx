import React from "react";
import ContactHero from "./Hero";
import Latest from "./Latest";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Collections: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - collections</title>
        <meta name="description" content="Description of my page" />
      </Helmet>

      <ContactHero />
      <Latest />
    </HelmetProvider>
  );
};

export default Collections;
