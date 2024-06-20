import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
// import initStore from "./redux/store";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";

// export const store = initStore({});

const App: React.FC = (): JSX.Element => {
  console.log(getCookieConsentValue("AwesomeCookieName"));
  // console.log("This is reset bro...", resetCookieConsentValue());
  console.log("This is the cookies yoh bro...", Cookies);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookie"
        cookieName="AwesomeCookieName"
        cookieValue="abidoshaker-12394-kje9"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => {
          console.log("User accepted cookies!");
          // Check if the cookie is set
          console.log("Cookie set: ", document.cookie);
        }}
        debug={true}
        enableDeclineButton
        flipButtons
      >
        This website uses cookies to enhance the user experience.{" "}
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
    </Provider>
  );
};

export default App;

// onAccept={(acceptedByScrolling) => {
//   if (acceptedByScrolling) {
//     // triggered if user scrolls past threshold
//     alert("Accept was triggered by user scrolling");
//   } else {
//     alert("Accept was triggered by clicking the Accept button");
//   }
// }}
// acceptOnScroll={true}
// acceptOnScrollPercentage={50}
// onAccept={(byScroll) => {
//   alert(`consent given. \n\n By scrolling? ${byScroll}`);
// }}
