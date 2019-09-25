import Nodes from "~/data/nodes.json";

export const saveDestination = stopName => dispatch => {
  const { DocumentElement: stops } = Nodes;
  let destination = stops.find(stop => stop.Node === stopName);
  if (!destination) {
    destination = {
      stop: stopName,
      name: "Unknown",
      error: "¡no pudimos encontrar esa parada de autobús!"
    };
  } else {
    destination = {
      stop: destination.Node,
      name: destination.Name,
      latitude: parseFloat(destination.latitude),
      longitude: parseFloat(destination.longitude)
    };
  }
  return dispatch({
    type: "SAVE_DESTINATION",
    destination
  });
};

export const setCoordinates = coordinates => dispatch =>
  dispatch({ type: "SET_COORDINATES", coordinates });

export const hideHeader = () => dispatch => dispatch({ type: "HIDE_HEADER" });

export const toggleMode = () => dispatch => dispatch({ type: "TOGGLE_MODE" });

export const setMode = mode => dispatch => dispatch({ type: "SET_MODE", mode });
