import React, { useContext } from "react";
import { View, Text } from "react-native";
import BurgerMenu from "./BurgerMenu";
import styles from "../common/styles";
import { HabitContext } from "./HabitContext";

const TopBar = (props: any) => {
  const { chains } = useContext(HabitContext);

  const completeChains = chains.reduce(
    (sum, chain) => sum + (chain.isComplete ? 1 : 0),
    0
  );

  return (
    <View style={styles.topBar}>
      <BurgerMenu />
      <Text style={styles.chainCount}>
        {completeChains}
        <Text style={{ ...styles.chainCount, fontSize: 24 }}> out of </Text>
        {chains.length}
      </Text>
      <BurgerMenu />
    </View>
  );
};

export default TopBar;
