import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "../common/styles";
import AddChainButton from "./chains/AddChainButton";
import Chain from "./chains/Chain";
import { HabitContext } from "../state/HabitContext";

const ChainsContainer = () => {
  const { chains, clearCompleted } = useContext(HabitContext);

  const [storedDate, setStoredDate] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getMinutes();
      if (storedDate !== currentDate) {
        setStoredDate(currentDate);
        clearCompleted();
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.chainsContainer}>
      <ScrollView keyboardShouldPersistTaps={"always"}>
        {chains.map((chain, i) => (
          <Chain {...chain} index={i} key={i++} />
        ))}
        <AddChainButton />
      </ScrollView>
    </View>
  );
};

export default ChainsContainer;
