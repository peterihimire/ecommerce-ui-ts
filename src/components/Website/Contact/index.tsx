import React from "react";
import ContactHero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Choose from "./Choose";
import Testimonial from "./Testimonial";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contact: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>contact - benkih</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      <ContactHero />
      {/* <WhoWeAre /> */}
      <Choose />
      {/* <Testimonial /> */}
    </HelmetProvider>
  );
};

export default Contact;
