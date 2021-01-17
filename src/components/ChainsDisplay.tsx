import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Chain, { HabitType } from "./Chain";

export type ChainToDisplay = {
  habits: HabitType[];
  isComplete: boolean;
};

const ChainsDisplay = () => {
  const [chains, setChains] = useState<ChainToDisplay[]>([]);

  // TODO Refactor to dynamic list
  // Dummy values reading in
  useEffect(() => {
    setChains([
      { habits: [], isComplete: false },
      { habits: [], isComplete: false },
      { habits: [], isComplete: false },
    ]);
  }, []);

  let chainKeyCount = 0;

  return (
    <View style={styles.container}>
      {chains.map((chain) => (
        <Chain key={chainKeyCount++} />
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
