import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BurgerMenu from "./BurgerMenu";

export const TopBar = (chainCount: any) => {
  return (
    <View style={styles.topBar}>
      <BurgerMenu />
      <Text style={styles.chainCount}>0</Text>
      <BurgerMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    display: "flex",
    height: 80,
    backgroundColor: "#e74c3c",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chainCount: {
    color: "#ffffff",
    fontSize: 32,
    marginBottom: 10,
  },
});
