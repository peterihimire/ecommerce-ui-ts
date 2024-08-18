import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import CookieConsent from "react-cookie-consent";
import { setupAxiosInterceptors } from "./utils/SetupAxiosInterceptor";
import $axios from "./redux/api/config"; 

// const $axios = axios.create({
//   baseURL: "http://localhost:4040/api/ecommerce/v1/",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// Pass the store's dispatch to the interceptor setup
setupAxiosInterceptors($axios, store.dispatch);

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
        style={{ background: "#1e1e1e" }}
        buttonStyle={{
          background: "#FFE802",
          color: "#4e503b",
          fontSize: "13px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Provider>
  );
};

export default App;
