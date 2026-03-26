"use client";
import { createContext, useContext, useState } from "react";

type IWebContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isTitleMap: Record<string, string>;
  setIsTitle: (sectionId: string, title: string) => void;

  activeIndexMap: Record<string, number>;
  setActiveIndex: (
    sectionId: string,
    value: number | ((prev: number) => number)
  ) => void;
};

export const WebContext = createContext<IWebContext>({
  isOpen: false,
  setIsOpen: () => {},

  isTitleMap: {},
  setIsTitle: () => {},

  activeIndexMap: {},
  setActiveIndex: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const WebProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTitleMap, setIsTitleMap] = useState<Record<string, string>>({});

  const [activeIndexMap, setActiveIndexMap] = useState<Record<string, number>>(
    {}
  );

  const setActiveIndex = (
    sectionId: string,
    value: number | ((prev: number) => number)
  ) => {
    setActiveIndexMap((prevState) => {
      const current = prevState[sectionId] ?? 0;

      return {
        ...prevState,
        [sectionId]:
          typeof value === "function"
            ? (value as (prev: number) => number)(current)
            : value,
      };
    });
  };
  const setIsTitle = (sectionId: string, title: string) => {
    setIsTitleMap((prev) => ({
      ...prev,
      [sectionId]: title,
    }));
  };

  return (
    <WebContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isTitleMap,
        setIsTitle,
        activeIndexMap,
        setActiveIndex,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => useContext(WebContext);
