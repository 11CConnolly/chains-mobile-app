import React, { useState, createContext, useEffect } from "react";
import { IChain } from "../components/chains/Chain";
import { IHabit } from "../components/habits/Habit";

interface IContextProps {
  chains: IChain[];
  setChains: React.Dispatch<React.SetStateAction<IChain[]>>;
  addHabit: (chainIndex: number, text: string) => void;
  removeHabit: (chainIndex: number, habitIndex: number) => void;
  addChain: (title: string, habit: string) => void;
  markHabit: (chainIndex: number, habitIndex: number) => void;
  markChain: (chainIndex: number) => void;
}

export const HabitContext = createContext<IContextProps>({
  chains: [],
  setChains: () => null,
  addHabit: (chainIndex: number, text: string) => null,
  removeHabit: (chainIndex: number, habitIndex: number) => null,
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
        title: "Morning",
        index: 0,
        habits: [
          {
            text: "Shower",
            index: 0,
            isComplete: false,
            tryMarkHabit: undefined,
          },
          {
            text: "Make bed",
            index: 1,
            isComplete: false,
            tryMarkHabit: undefined,
          },
          {
            text: "Meditate",
            index: 2,
            isComplete: false,
            tryMarkHabit: undefined,
          },
        ],
        isComplete: false,
      },
      {
        title: "Evening Routine",
        index: 1,
        habits: [
          {
            text: "Journal",
            index: 0,
            isComplete: false,
            tryMarkHabit: undefined,
          },
          {
            text: "Read 20 minutes",
            index: 1,
            isComplete: false,
            tryMarkHabit: undefined,
          },
        ],
        isComplete: false,
      },
      {
        title: "Exercise",
        index: 2,
        habits: [
          {
            text: "Dynamic Stretch",
            index: 0,
            isComplete: false,
            tryMarkHabit: undefined,
          },
          {
            text: "Run",
            index: 1,
            isComplete: false,
            tryMarkHabit: undefined,
          },
          {
            text: "Mid body",
            index: 2,
            isComplete: false,
            tryMarkHabit: undefined,
          },
          {
            text: "Static stretch",
            index: 3,
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
    });
    items[chainIndex] = { ...items[chainIndex], habits, isComplete: false };

    updateChains(items);
  };

  const removeHabit = (chainIndex: number, habitIndex: number) => {
    let items = [...chains];
    let habits = items[chainIndex].habits;

    habits.splice(habitIndex, 1);

    if (habits.length === 0) {
      items.splice(chainIndex, 1);
    }

    updateChains(items);
  };

  const addChain = (title: string, text: string) => {
    let items = [...chains];
    items.splice(chains.length, 0, {
      title,
      index: chains.length,
      habits: [{ index: 0, text, isComplete: false, tryMarkHabit: undefined }],
      isComplete: false,
    });
    updateChains(items);
  };

  const toggleHabit = (chainIndex: number, habitIndex: number) => {
    let items = [...chains];
    let item = { ...items[chainIndex] };
    item.habits[habitIndex].isComplete = !item.habits[habitIndex].isComplete;
    items[chainIndex] = item;
    updateChains(items);
  };

  // Ensures chains are updates with accurate isComplete
  const updateChains = (newChains: IChain[]) => {
    setChains(
      newChains.map((chain) => {
        const isComplete = chain.habits.reduce(
          (sum, habit) => sum && habit.isComplete,
          true
        );
        return { ...chain, isComplete };
      })
    );
  };

  const toggleChain = (chainIndex: number) => {
    setChains((list) =>
      list.map((chain, i) =>
        i === chainIndex
          ? {
              ...chain,
              isComplete: !chain.isComplete,
            }
          : chain
      )
    );
  };

  return (
    <HabitContext.Provider
      value={{
        chains,
        setChains,
        addHabit,
        removeHabit,
        addChain,
        markHabit: toggleHabit,
        markChain: toggleChain,
      }}
    >
      {props.children}
    </HabitContext.Provider>
  );
};
