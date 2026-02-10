"use client";
import { createContext, useContext, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);   // ✅ ADD THIS

  return (
    <WebContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  return useContext(WebContext);
};
