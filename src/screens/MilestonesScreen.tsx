import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default function MilestonesScreen() {
  return (
    <View style={styles.container}>
      <Text>Milestones screen</Text>
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
