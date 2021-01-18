import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Chain, { HabitType } from "./Chain";

export type ChainToDisplay = {
  index: number;
  habits: HabitType[];
  isComplete: boolean;
};

const ChainsDisplay = (incCounter: any) => {
  const [chains, setChains] = useState<ChainToDisplay[]>([]);

  // TODO Refactor to dynamic list
  // Dummy values reading in
  useEffect(() => {
    setChains([
      { index: 0, habits: [], isComplete: false },
      { index: 1, habits: [], isComplete: false },
      { index: 2, habits: [], isComplete: false },
    ]);
  }, []);

  let chainKeyCount = 0;

  const markChainAsComplete = (index: number) => {
    setChains((list) =>
      list.map((chain, i) =>
        i === index
          ? {
              ...chain,
              isComplete: true,
            }
          : chain
      )
    );

    if (chains[index].isComplete) incCounter();
  };

  return (
    <View style={styles.container}>
      {chains.map((chain) => (
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
