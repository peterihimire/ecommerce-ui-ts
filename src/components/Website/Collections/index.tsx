import React, { useState, useEffect, useMemo } from "react";
import Hero from "../../shared/smallHero";
import Latest from "./Latest";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Collections: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - collections</title>
        <meta name="description" content="Description of my page" />
      </Helmet>

      <Hero home={`home`} currentLink={`collections`} />
      <Latest />
    </HelmetProvider>
  );
};

export default Collections;
