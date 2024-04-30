import React from "react";
import ContactHero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Choose from "./Choose";
import Latest from "./Latest";
import Testimonial from "./Testimonial";
// import { Helmet } from "react-helmet-async";

const Collections: React.FC = () => {
  return (
    <div className={`homepage`}>
      {/* <Helmet>
        <title>Home - Benkih</title>
      </Helmet> */}
      <ContactHero />
      {/* <WhoWeAre /> */}
      <Latest />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Collections;
