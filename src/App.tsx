import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import logo from "./logo.svg";
import { AllRoutes } from "./routes/AllRoutes";
// import { Provider } from "react-redux";
// import initStore from "./redux/store";

// export const store = initStore({});

const App: React.FC = (): JSX.Element => {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    // </Provider>
  );
};

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

// export default App;
