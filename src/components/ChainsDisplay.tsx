import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Chain, { HabitType } from "./Chain";
import { DisplayChainsType } from "../screens/MainScreen";

export type ChainType = {
  index: number;
  isComplete: boolean;
  habits: HabitType[];
  markChainAsComplete: (index: number) => void;
};

const ChainsDisplay = ({ incCounter, chains }: DisplayChainsType) => {
  const [chainList, setChainsList] = useState<ChainType[]>([]);

  const dummyHabitArr: HabitType[] = [
    {
      text: "1",
      index: 0,
      isComplete: false,
    },
    {
      text: "2",
      index: 1,
      isComplete: false,
    },
    {
      text: "3",
      index: 2,
      isComplete: false,
    },
    {
      text: "4",
      index: 3,
      isComplete: false,
    },
  ];

  // Dummy values reading in
  useEffect(() => {
    setChainsList([
      {
        index: 0,
        habits: dummyHabitArr,
        isComplete: false,
        markChainAsComplete: markChainAsComplete,
      },
      {
        index: 1,
        habits: dummyHabitArr,
        isComplete: false,
        markChainAsComplete: markChainAsComplete,
      },
    ]);
  }, []);

  let chainKeyCount = 0;

  const markChainAsComplete = (index: number) => {
    setChainsList((list) =>
      list.map((chain, i) =>
        i === index
          ? {
              ...chain,
              isComplete: true,
            }
          : chain
      )
    );

    if (chainList[index].isComplete) incCounter();
  };

  return (
    <View style={styles.container}>
      {chainList.map((chain) => (
        <Chain key={chainKeyCount++} {...chain} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
});

export default ChainsDisplay;
