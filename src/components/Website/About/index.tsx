import React from "react";
import Hero from "../../shared/smallHero";
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
      {/* <Hero home={`home`} currentLink={`about us`} /> */}
      {/* <WhoWeAre /> */}
      <Choose />
      <Testimonial />
    </div>
  );
};

export default About;
