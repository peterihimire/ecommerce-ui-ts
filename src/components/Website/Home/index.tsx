import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import HomeHero from "./Hero";
import Categories from "./Categories";
import Popular from "./Popular";
import Explore from "./Explore";
import Latest from "./Latest";
import Choose from "./Choose";
import Sale from "./Sale";
import Flash from "./Flash";
import Discount from "./Discount";
import Testimonials from "./Testimonial";

// import CookieConsent, {
//   Cookies,
//   getCookieConsentValue,
//   resetCookieConsentValue,
// } from "react-cookie-consent";

const Home: React.FC = () => {
  // console.log(getCookieConsentValue("AwesomeCookieName"));
  // console.log("This is reset bro...", resetCookieConsentValue());
  // console.log("This is the cookies yoh bro...", Cookies);

  return (
    <HelmetProvider>
      <Helmet>
        <title>home - benkih</title>
      </Helmet>

      <HomeHero />
      <Categories />
      <Popular />
      <Explore />
      <Latest />
      <Choose />
      <Flash />
      <Sale />
      <Discount />
      <Testimonials />
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept Cookie"
        cookieName="AwesomeCookieName"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
        acceptOnScroll={true}
        acceptOnScrollPercentage={20}
        // onAccept={(byScroll) => {
        //   alert(`consent given. \n\n By scrolling? ${byScroll}`);
        // }}
        debug={true}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent> */}
    </HelmetProvider>
  );
};

export default Home;
