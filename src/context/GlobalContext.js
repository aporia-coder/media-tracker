import React from "react";
import { createContext, useReducer, useEffect } from "react";
import { GlobalReducer } from "../reducer/GlobalReducer";

export const GlobalContext = createContext();

const GlobalContextProvider = props => {
  const [items, dispatch] = useReducer(GlobalReducer, [], () => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <GlobalContext.Provider value={{ items, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
