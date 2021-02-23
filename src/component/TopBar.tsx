import React from "react";
import { View, Text } from "react-native";
import BurgerMenu from "./BurgerMenu";
import styles from "../common/styles";

const TopBar = (props: any) => {
  return (
    <View style={styles.topBar}>
      <BurgerMenu />
      <Text style={styles.chainCount}>0</Text>
      <BurgerMenu />
    </View>
  );
};

export default TopBar;
