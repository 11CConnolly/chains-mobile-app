import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "../common/styles";
import Chain from "./Chain";
import { HabitContext } from "./HabitContext";

const ChainsContainer = () => {
  const { chains, setChains } = useContext(HabitContext);

  return (
    <View style={styles.chainsContainer}>
      <Text>
        {chains.map((chain, i) => (
          <Chain key={i++} {...chain} />
        ))}
      </Text>
    </View>
  );
};

export default ChainsContainer;
