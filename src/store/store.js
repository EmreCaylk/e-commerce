import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

import clientReducer from "./reducers/clientReducer.js";
import productReducer from "./reducers/productReducer.js";
import shoppingCartReducer from "./reducers/shoppingCartReducer.js";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;