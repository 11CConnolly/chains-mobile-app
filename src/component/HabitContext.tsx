import React, { useState, createContext } from "react";
import { IChain } from "./Chain";
import { IHabit } from "./Habit";

interface IContextProps {
  chains: IChain[];
  setChains: React.Dispatch<React.SetStateAction<IChain[]>>;
  markHabit: Function;
}

export const HabitContext = createContext<IContextProps>({
  chains: [],
  setChains: () => null,
  markHabit: (listIndex: number, habitIndex: number) => null,
});

export const HabitProvider = (props: any) => {
  const dummyHabitArr: IHabit[] = [
    {
      text: "1",
      index: 0,
      isComplete: false,
      tryMarkHabit: undefined,
    },
    {
      text: "2",
      index: 1,
      isComplete: false,
      tryMarkHabit: undefined,
    },
    {
      text: "3",
      index: 2,
      isComplete: false,
      tryMarkHabit: undefined,
    },
    {
      text: "4",
      index: 3,
      isComplete: false,
      tryMarkHabit: undefined,
    },
  ];

  const [chains, setChains] = useState<IChain[]>([
    {
      index: 0,
      habits: dummyHabitArr,
      isComplete: false,
    },
    {
      index: 1,
      habits: dummyHabitArr,
      isComplete: false,
    },
  ]);

  const markHabit = (listIndex: number, habitIndex: number) => {};

  return (
    <HabitContext.Provider value={{ chains, setChains, markHabit }}>
      {props.children}
    </HabitContext.Provider>
  );
};
