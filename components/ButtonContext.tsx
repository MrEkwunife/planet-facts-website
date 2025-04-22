"use client";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ButtonContextType {
  activeBtn: string;
  setActiveBtn: Dispatch<SetStateAction<string>>;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export function ButtonProvider({ children }: { children: ReactNode }) {
  const [activeBtn, setActiveBtn] = useState("overview");

  return (
    <ButtonContext.Provider value={{ activeBtn, setActiveBtn }}>
      {children}
    </ButtonContext.Provider>
  );
}

export function useButtonContext() {
  return useContext(ButtonContext);
}
