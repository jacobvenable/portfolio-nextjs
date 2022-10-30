import React, { createContext, useEffect, useContext, useState } from "react";

type TIsLightMode = boolean;
type LightModeContextValue = [
  TIsLightMode,
  React.Dispatch<React.SetStateAction<TIsLightMode>>
];
export const LightModeContext = createContext<LightModeContextValue>([
  false,
  () => undefined,
]);

type LightModeContextProviderProps = {
  children: React.ReactNode;
};

export const LightModeProvider: React.FC<LightModeContextProviderProps> = ({
  children,
}) => {
  const isLightModeState = useState(true);
  const setIsLightMode = isLightModeState[1];

  useEffect(() => {
    setIsLightMode(window.matchMedia("(prefers-color-scheme: light)").matches);
  }, [setIsLightMode]);

  return (
    <LightModeContext.Provider value={isLightModeState}>
      {children}
    </LightModeContext.Provider>
  );
};

export const useLightMode = () => useContext(LightModeContext);
