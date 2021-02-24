import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../common/styles";
import AddChainButton from "./AddChainButton";
import Chain from "./Chain";
import { HabitContext } from "./HabitContext";

const ChainsContainer = () => {
  const { chains } = useContext(HabitContext);

  return (
    <View style={styles.chainsContainer}>
      <ScrollView>
        {chains.map((chain, i) => (
          <Chain key={i++} {...chain} />
        ))}
        <AddChainButton />
      </ScrollView>
    </View>
  );
};

export default ChainsContainer;
