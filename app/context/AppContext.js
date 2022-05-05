import React, { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [isSynced, setSynced] = useState(true);
  return (
    <AppContext.Provider value={{ isSynced, setSynced }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
