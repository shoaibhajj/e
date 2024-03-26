import React, { createContext, useContext, useReducer } from "react";

//Prepare data layer
const StateContext = createContext();

//Wrap our app and provide that data layer with this Provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
