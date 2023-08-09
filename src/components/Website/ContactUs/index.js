import React from "react";
// import SmallHero from "../../ui/smallHero";
import ContactForm from "./contactForm";
import Contact from "./ourFeature";
import GrowFast from "./growFast";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Contact Us - Benkih</title>
      </Helmet>

      {/* <SmallHero title={`Contact Us`} /> */}
      <ContactForm />
      <Contact />
      <GrowFast />
    </div>
  );
};

export default ContactPage;
