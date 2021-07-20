import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./rootReducer";
import thunk from "redux-thunk";
const Middleware = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancers = compose;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...Middleware))
);

export default store;
