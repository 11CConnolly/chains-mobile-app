import React, { useState, useEffect } from "react";
import { View } from "react-native";
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

  return (
    <View>
      {chains.map((chain) => (
        <Chain />
      ))}
    </View>
  );
};

export default ChainsDisplay;
