// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import thunk, { ThunkMiddleware } from "redux-thunk";
// import rootReducer, { RootState } from "./reducers";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const DEV = process.env.NODE_ENV !== "production";

// let middleware = [thunk as ThunkMiddleware<RootState, AnyAction>];
// let composeEnhancers: typeof compose = compose;

// if (DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// }

// let composers = [applyMiddleware(...middleware)];

// const initStore = (initialState: RootState) => {
//   const reducer = combineReducers(rootReducer);
//   const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancers(...composers)
//   );
//   return store;
// };

// export default initStore;

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const DEV = process.env.NODE_ENV !== "production";
// let middleware = [thunk];
// let composeEnhancers = compose;

// if (DEV) {
//   composeEnhancers =
//     (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
//     compose;
// }

// let composers = [applyMiddleware(...middleware)];

const initStore = (initialState: any) => {
  const reducer = combineReducers(rootReducer);
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
    // composeEnhancers(...composers)
  );
  return store;
};

export default initStore;
