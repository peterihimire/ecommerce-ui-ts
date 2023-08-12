import React from "react";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Provider } from "react-redux";
import initStore from "./redux/store";

export const store = initStore({});

const App = () => {
  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
};

export default App;
