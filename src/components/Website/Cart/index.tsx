import React from "react";
import CartHero from "./Hero";
import Content from "./Content";

// import { Helmet } from "react-helmet-async";

const Collections: React.FC = () => {
  return (
    <div className={`homepage`}>
      {/* <Helmet>
        <title>Home - Benkih</title>
      </Helmet> */}
      <CartHero />
      {/* <WhoWeAre /> */}
      <Content />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Collections;
