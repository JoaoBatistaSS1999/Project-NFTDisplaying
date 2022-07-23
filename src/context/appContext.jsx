import React, { useState } from "react";

export const AppContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [nftsArray, setNftsArray] = useState([]);

  return (
    <AppContext.Provider
      value={{
        isConnected,
        setIsConnected,
        nftsArray,
        setNftsArray,
        walletAddress,
        setWalletAddress,
      }}>
      {children}
    </AppContext.Provider>
  );
};
