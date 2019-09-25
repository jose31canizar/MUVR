import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducers";

export const startingState = {
  destination: {
    stop: "316",
    name: "MIGUEL ANGEL-RUBEN DARIO",
    latitude: 40.435220918329264,
    longitude: -3.6902029522018283
  },
  mode: "cards",
  coordinates: [40.435220918329264, -3.6902029522018283]
};

export function initializeStore(initialState = startingState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
