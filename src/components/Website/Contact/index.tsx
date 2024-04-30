import React from "react";
import ContactHero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Choose from "./Choose";
import Testimonial from "./Testimonial";
// import { Helmet } from "react-helmet-async";

const Contact: React.FC = () => {
  return (
    <div className={`homepage`}>
      {/* <Helmet>
        <title>Home - Benkih</title>
      </Helmet> */}
      <ContactHero />
      {/* <WhoWeAre /> */}
      <Choose />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Contact;
