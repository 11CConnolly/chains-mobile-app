import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default function ChartsScreen() {
  return (
    <View style={styles.container}>
      <Text>Charts screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
