import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "../common/styles";
import AddChainButton from "./chains/AddChainButton";
import Chain from "./chains/Chain";
import { HabitContext } from "../state/HabitContext";

const ChainsContainer = () => {
  const { chains } = useContext(HabitContext);

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
