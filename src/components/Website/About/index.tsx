import React from "react";
import AboutHero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Choose from "./Choose";
import Testimonial from "./Testimonial";
// import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  return (
    <div className={`homepage`}>
      {/* <Helmet>
        <title>Home - Benkih</title>
      </Helmet> */}
      <AboutHero />
      {/* <WhoWeAre /> */}
      <Choose />
      <Testimonial />
    </div>
  );
};

export default About;
