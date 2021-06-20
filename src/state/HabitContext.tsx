import React, { useState, createContext, useEffect } from "react";
import { IChain } from "../components/chains/Chain";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICommit } from "../components/containers/MilestonesContainer";

interface IContextProps {
  chains: IChain[];
  chartCommitData: ICommit[];
  dailyChainsNum: number;
  completeChainsNum: number;
  setChains: React.Dispatch<React.SetStateAction<IChain[]>>;
  addHabit: (chainIndex: number, text: string) => void;
  removeHabit: (chainIndex: number, habitIndex: number) => void;
  addChain: (title: string, habit: string) => void;
  markHabit: (chainIndex: number, habitIndex: number) => void;
}

export const HabitContext = createContext<IContextProps>({
  chains: [],
  chartCommitData: [],
  dailyChainsNum: 0,
  completeChainsNum: 0,
  setChains: () => null,
  addHabit: (chainIndex: number, text: string) => null,
  removeHabit: (chainIndex: number, habitIndex: number) => null,
  addChain: (text: string) => null,
  markHabit: (chainIndex: number, habitIndex: number) => null,
});

export const HabitProvider = (props: any) => {
  const [chains, setChains] = useState<IChain[]>([]);
  const [chartCommitData, setChartCommitData] = useState<ICommit[]>([
    { date: "Fri Jun 18 2021", count: 1 },
    { date: "Sat Jun 19 2021", count: 2 },
    { date: "Sun Jun 20 2021", count: 4 },
    { date: "Mon Jun 21 2021", count: 4 },
  ]);

  const [dailyChainsNum, setDailyChainsNum] = useState<number>(0);
  const [completeChainsNum, setCompleteChainsNum] = useState<number>(0);

  // List of completed chains to check, or hashmap to check quickly for that O(1)
  const [checkedHabitsList, setCheckedHabitsList] = useState<string[]>([]);

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
          // ON A NEW DAY, PERFORM THESE ACTIONS
          clearAndUpdateChains(storedChains);
          updateDate(currentDate);
          setDailyChainsNum(0);
        } else {
          // SAME DAY, PERFORM THESE ACTIONS
          updateChains(storedChains);
          AsyncStorage.getItem("CHAINSAPP::DAILYCHAINS").then(async (value) => {
            if (value) {
              setDailyChainsNum(JSON.parse(value));
            }
          });
        }
      } else {
        updateChains([]);
      }
    });
    AsyncStorage.getItem("CHAINSAPP::COMPLETEDCHAINS").then(async (value) => {
      if (value) {
        setCompleteChainsNum(JSON.parse(value));
      }
    });
    AsyncStorage.getItem("CHAINSAPP::CHARTCOMMITDATA").then(async (value) => {
      if (value) {
        setCompleteChainsNum(JSON.parse(value));
      }
    });
  }, []);

  // Sends the chains to storage once whenever they're editted
  useEffect(() => {
    if (chains !== null || chains !== undefined || chains !== []) {
      AsyncStorage.setItem("CHAINSAPP::CHAINS", JSON.stringify(chains));
    }
  }, [chains]);

  useEffect(() => {
    if (
      chartCommitData !== null ||
      chartCommitData !== undefined ||
      chartCommitData !== []
    ) {
      AsyncStorage.setItem(
        "CHAINSAPP::CHARTCOMMITDATA",
        JSON.stringify(chartCommitData)
      );
    }
  }, [chartCommitData]);

  // Store the Daily Completed Chains
  useEffect(() => {
    if (
      dailyChainsNum !== null ||
      dailyChainsNum !== undefined ||
      dailyChainsNum !== 0
    ) {
      AsyncStorage.setItem(
        "CHAINSAPP::DAILYCHAINS",
        JSON.stringify(dailyChainsNum)
      );
    }
  }, [dailyChainsNum]);

  // Store the Historical Completed Chains
  useEffect(() => {
    if (completeChainsNum !== null || completeChainsNum !== undefined) {
      AsyncStorage.setItem(
        "CHAINSAPP::COMPLETEDCHAINS",
        JSON.stringify(completeChainsNum)
      );
    }
  }, [completeChainsNum]);

  // Stores the current data to test against on the same day or a new day
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

  // Add 1 to current day of chart commit data
  const updateChartCommitData = () => {
    const commit = chartCommitData.find(
      (commit) => commit.date === new Date().toDateString()
    );

    console.log(commit);

    if (commit === undefined) {
      chartCommitData.push({ date: new Date().toDateString(), count: 1 });
    } else {
      setChartCommitData(
        chartCommitData.map((c) =>
          c.date === commit.date
            ? { date: commit.date, count: commit.count + 1 }
            : c
        )
      );
    }
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
    // TODO Check if chain has already been completed
    if (
      item.habits.length - 1 === habitIndex &&
      item.habits[habitIndex].isComplete
    ) {
      // Update daily number of chains complete, complete chains and chart commit data
      setDailyChainsNum(dailyChainsNum + 1);
      setCompleteChainsNum(completeChainsNum + 1);
      updateChartCommitData();
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
        chartCommitData,
        dailyChainsNum,
        completeChainsNum,
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
