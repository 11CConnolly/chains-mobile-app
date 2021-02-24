import React, { useState, createContext, useEffect } from "react";
import { IChain } from "./Chain";
import { IHabit } from "./Habit";

interface IContextProps {
  chains: IChain[];
  setChains: React.Dispatch<React.SetStateAction<IChain[]>>;
  addHabit: (chainIndex: number, text: string) => void;
  addChain: (text: string) => void;
  markHabit: (chainIndex: number, habitIndex: number) => void;
  markChain: (chainIndex: number) => void;
}

export const HabitContext = createContext<IContextProps>({
  chains: [],
  setChains: () => null,
  addHabit: (chainIndex: number, text: string) => null,
  addChain: (text: string) => null,
  markHabit: (chainIndex: number, habitIndex: number) => null,
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
        ],
        isComplete: false,
      },
    ]);
  }, []);

  const addHabit = (chainIndex: number, text: string) => {
    let items = [...chains];

    let habits = items[chainIndex].habits;
    habits.splice(habits.length, 0, {
      text,
      index: habits.length,
      isComplete: false,
      tryMarkHabit: undefined,
    });
    items[chainIndex] = { ...items[chainIndex], habits, isComplete: false };

    setChains(items);
  };

  const addChain = (text: string) => {
    let items = [...chains];
    items.splice(chains.length, 0, {
      index: chains.length,
      habits: [{ index: 0, text, isComplete: false, tryMarkHabit: undefined }],
      isComplete: false,
    });
    setChains(items);
  };

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
    <HabitContext.Provider
      value={{ chains, setChains, addHabit, addChain, markHabit, markChain }}
    >
      {props.children}
    </HabitContext.Provider>
  );
};
