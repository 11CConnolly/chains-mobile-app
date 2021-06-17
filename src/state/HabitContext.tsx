import React, { useState, createContext, useEffect } from "react";
import { IChain } from "../components/chains/Chain";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IContextProps {
  chains: IChain[];
  completeChains: number;
  setChains: React.Dispatch<React.SetStateAction<IChain[]>>;
  addHabit: (chainIndex: number, text: string) => void;
  removeHabit: (chainIndex: number, habitIndex: number) => void;
  addChain: (title: string, habit: string) => void;
  markHabit: (chainIndex: number, habitIndex: number) => void;
}

export const HabitContext = createContext<IContextProps>({
  chains: [],
  completeChains: 0,
  setChains: () => null,
  addHabit: (chainIndex: number, text: string) => null,
  removeHabit: (chainIndex: number, habitIndex: number) => null,
  addChain: (text: string) => null,
  markHabit: (chainIndex: number, habitIndex: number) => null,
});

const InitialChains = [
  {
    title: "Morning",
    index: 0,
    habits: [
      {
        text: "Shower",
        index: 0,
        isComplete: true,
        tryMarkHabit: undefined,
      },
      {
        text: "Make bed",
        index: 1,
        isComplete: true,
        tryMarkHabit: undefined,
      },
      {
        text: "Meditate",
        index: 2,
        isComplete: true,
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
];

export const HabitProvider = (props: any) => {
  const [chains, setChains] = useState<IChain[]>([]);
  const [completeChains, setCompleteChains] = useState<number>(0);
  // List of completed chains to check, or hashmap to check quickly for that O(1)

  // Gets completed chains on mount refreshing on new day
  useEffect(() => {
    AsyncStorage.getItem("CHAINSAPP::CHAINS").then(async (value) => {
      if (value) {
        const storedChains = JSON.parse(value);
        const currentDate = new Date().getDate();

        let storedDate = 0;

        await AsyncStorage.getItem("CHAINSAPP::DATE").then((value) => {
          if (value) {
            storedDate = JSON.parse(value);
          }
        });

        if (storedDate !== currentDate) {
          // Now clear the chains for a new day
          clearAndUpdateChains(storedChains);
          updateDate(currentDate);
        } else {
          // Just update the chain
          updateChains(storedChains);
        }
      } else {
        updateChains([]);
      }
    });
    AsyncStorage.getItem("CHAINSAPP::COMPLETEDCHAINS").then(async (value) => {
      if (value) {
        setCompleteChains(JSON.parse(value));
      }
    });
  }, []);

  // Sends the chains to storage once whenever they're editted
  useEffect(() => {
    if (chains !== null || chains !== undefined || chains !== []) {
      AsyncStorage.setItem("CHAINSAPP::CHAINS", JSON.stringify(chains));
    }
  }, [chains]);

  // Store the Historical Completed Chains
  useEffect(() => {
    if (completeChains !== null || completeChains !== undefined) {
      AsyncStorage.setItem("CHAINSAPP::TOTAL", JSON.stringify(completeChains));
    }
  }, [completeChains]);

  // Sends the chains to storage once whenever they're editted
  const updateDate = (currentDate: number) => {
    if (currentDate !== null || currentDate !== undefined) {
      AsyncStorage.setItem("CHAINSAPP::DATE", JSON.stringify(currentDate));
    }
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

  // Used to refresh chains on a new day
  const clearAndUpdateChains = (chainsToClear: IChain[]) => {
    let tempChains = [...chainsToClear];
    tempChains.map((chain) => {
      chain.habits.map((habit) => {
        habit.isComplete = false;
      });
    });
    updateChains(tempChains);
  };

  /*
   * FUNCTIONAL METHODS FOR DYNAMIC CHAINS
   */

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

    // Check if the chain was completed
    if (
      item.habits.length - 1 === habitIndex &&
      item.habits[habitIndex].isComplete
    ) {
      setCompleteChains(completeChains + 1);
    }

    updateChains(items);
  };

  /*
   * METHODS FOR ENABLING HISTORIAL DATA CHAINS
   */

  return (
    <HabitContext.Provider
      value={{
        chains,
        completeChains,
        setChains,
        addHabit,
        removeHabit,
        addChain,
        markHabit: toggleHabit,
      }}
    >
      {props.children}
    </HabitContext.Provider>
  );
};
