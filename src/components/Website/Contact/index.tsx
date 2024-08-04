import React from "react";
import Hero from "../../shared/smallHero";
import Choose from "./Choose";
import Form from "./Form";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contact: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>contact - benkih</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero home={`home`} currentLink={`contact us`} /> */}
      {/* <Form /> */}
      <Choose />
      {/* <Testimonial /> */}
    </HelmetProvider>
  );
};

export default Contact;
