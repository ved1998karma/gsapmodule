import React, { createContext, useContext, useReducer } from "react";
import reducer from "./uiReducer";
const uiContext = createContext();
const initState = {
  overlayState: null,
  blogs: null,
  counter: 0,
};
export const UIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <uiContext.Provider value={{ state, dispatch }}>
      {children}
    </uiContext.Provider>
  );
};
export const UseUIContext = () => {
  return useContext(uiContext);
};
