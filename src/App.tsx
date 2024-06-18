import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
// import initStore from "./redux/store";

// export const store = initStore({});

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
