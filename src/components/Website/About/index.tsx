import React from "react";
import AboutHero from "./Hero";
import WhoWeAre from "./WhoWeAre";
// import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  return (
    <div className={`homepage`}>
      {/* <Helmet>
        <title>Home - Benkih</title>
      </Helmet> */}

      <AboutHero />
      <WhoWeAre />
    </div>
  );
};

export default About;
