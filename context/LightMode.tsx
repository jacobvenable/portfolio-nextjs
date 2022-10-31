import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type TIsLightMode = boolean | undefined;
type LightModeContextValue = [
  TIsLightMode,
  React.Dispatch<React.SetStateAction<TIsLightMode>>
];
export const LightModeContext = createContext<LightModeContextValue>([
  undefined,
  () => undefined,
]);

type LightModeContextProviderProps = {
  children: React.ReactNode;
};

export const LightModeProvider: React.FC<LightModeContextProviderProps> = ({
  children,
}) => {
  const [isLightMode, setIsLightMode] = useState<TIsLightMode>(undefined);

  const wrappedSetIsLightMode = useCallback(
    (isLightMode: boolean) => {
      localStorage.setItem("isLightMode", isLightMode.toString());
      setIsLightMode(isLightMode);
    },
    [setIsLightMode]
  );

  useEffect(() => {
    const storedIsLightMode = localStorage.getItem("isLightMode") === "true";
    const isLightModeByPreference = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    wrappedSetIsLightMode(storedIsLightMode ?? isLightModeByPreference);
  }, [wrappedSetIsLightMode]);

  return (
    <LightModeContext.Provider value={[isLightMode, wrappedSetIsLightMode]}>
      {children}
    </LightModeContext.Provider>
  );
};

export const useLightMode = () => useContext(LightModeContext);
