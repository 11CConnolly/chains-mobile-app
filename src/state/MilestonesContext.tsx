import React, { useState, createContext, useEffect } from "react";
import { IChain } from "../components/chains/Chain";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IMilestoneContextProps {
  totalCompletedChains: number;
  setTotalCompletedChains: React.Dispatch<React.SetStateAction<number>>;
}

export const MilestoneContext = createContext<IMilestoneContextProps>({
  totalCompletedChains: 0,
  setTotalCompletedChains: () => null,
});

export const HabitProvider = (props: any) => {
  //TODO get from async storage
  const [totalCompletedChains, setTotalCompletedChains] = useState<number>(0);

  return (
    <MilestoneContext.Provider
      value={{
        totalCompletedChains,
        setTotalCompletedChains,
      }}
    >
      {props.children}
    </MilestoneContext.Provider>
  );
};
