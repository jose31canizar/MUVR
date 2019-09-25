import { startingState } from "../store";

export const reducer = (
  state = startingState,
  { type, destination, mode, coordinates }
) => {
  switch (type) {
    case "SET_COORDINATES":
      return { ...state, coordinates };
    case "SAVE_DESTINATION":
      return { ...state, destination };
    case "HIDE_HEADER":
      return { ...state, header: "hidden" };
    case "TOGGLE_MODE":
      return { ...state, mode: state.mode === "cards" ? "list" : "cards" };
    case "SET_MODE":
      return { ...state, mode };
    default:
      return state;
  }
};
