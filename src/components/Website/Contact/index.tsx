import React from "react";
import ContactHero from "./Hero";
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
      <ContactHero />
      {/* <Form /> */}
      <Choose />
      {/* <Testimonial /> */}
    </HelmetProvider>
  );
};

export default Contact;
