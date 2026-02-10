"use client";
import { createContext, useContext } from "react";

type IWebContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WebContext = createContext<IWebContext>({
  isOpen: false,
  setIsOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const WebProvider = ({ children }: Props) => {
  return (
    <WebContext.Provider value={{ isOpen: false, setIsOpen: () => {} }}>
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  return useContext(WebContext);
};
