import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "../common/styles";

const BurgerMenu = () => {
  return (
    <View>
      <View style={styles.menuLine}></View>
      <View style={styles.menuLine}></View>
      <View style={styles.menuLine}></View>
    </View>
  );
};

export default BurgerMenu;
