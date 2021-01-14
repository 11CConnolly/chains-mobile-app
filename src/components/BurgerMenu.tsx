import React from "react";
import { View, StyleSheet } from "react-native";

const BurgerMenu = () => {
  return (
    <View>
      <View style={styles.menuLine}></View>
      <View style={styles.menuLine}></View>
      <View style={styles.menuLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLine: {
    width: 30,
    height: 3,
    backgroundColor: "#000000",
    marginLeft: 20,
    marginTop: 5,
  },
});

export default BurgerMenu;
