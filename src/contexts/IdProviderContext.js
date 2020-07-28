import React, { useState, createContext } from "react";

export const IdProviderContext = createContext();

export const IdProvider = (props) => {
  const [showId, setshowId] = useState();
  return (
    <IdProviderContext.Provider value={{ showId, setshowId }}>
      {props.children}
    </IdProviderContext.Provider>
  );
};
