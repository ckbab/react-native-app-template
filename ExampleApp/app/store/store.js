import { compose, applyMiddleware, createStore } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import reducers from "../store/reducers";

const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(navigationMiddleware))
);

export default store;
