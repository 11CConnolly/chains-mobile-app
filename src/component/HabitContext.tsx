import React, { useState, createContext, useEffect } from "react";
import { IChain } from "./Chain";
import { IHabit } from "./Habit";

interface IContextProps {
  chains: IChain[];
  setChains: React.Dispatch<React.SetStateAction<IChain[]>>;
  markHabit: Function;
  markChain: Function;
}

export const HabitContext = createContext<IContextProps>({
  chains: [],
  setChains: () => null,
  markHabit: (listIndex: number, habitIndex: number) => null,
  markChain: (chainIndex: number) => null,
});

export const HabitProvider = (props: any) => {
  const [chains, setChains] = useState<IChain[]>([]);

  // On Mount initialise the values
  useEffect(() => {
    setChains([
      {
        index: 0,
        habits: [
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
        ],
        isComplete: false,
      },
      {
        index: 1,
        habits: [
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
        ],
        isComplete: false,
      },
    ]);
  }, []);

  const markHabit = (chainIndex: number, habitIndex: number) => {
    let items = [...chains];
    let item = { ...items[chainIndex] };
    item.habits[habitIndex].isComplete = true;
    items[chainIndex] = item;
    setChains(items);
  };

  const markChain = (chainIndex: number) => {
    setChains((list) =>
      list.map((chain, i) =>
        i === chainIndex
          ? {
              ...chain,
              isComplete: true,
            }
          : chain
      )
    );
  };

  return (
    <HabitContext.Provider value={{ chains, setChains, markHabit, markChain }}>
      {props.children}
    </HabitContext.Provider>
  );
};
