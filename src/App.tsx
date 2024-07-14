import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import CookieConsent from "react-cookie-consent";

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      {/* <BrowserRouter>
        <AllRoutes />
      </BrowserRouter> */}

      <AllRoutes />
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookie"
        cookieName="benkih-ecommerce"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Provider>
  );
};

export default App;
