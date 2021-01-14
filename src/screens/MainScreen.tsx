import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Chain from "../components/Chain";
import { TopBar } from "../components/TopBar";

const MainScreen = () => {
  const [chains, setChains] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.chains}>
        <Chain />
        <Chain />
        <Chain />
        <Chain />
        <Chain />
      </View>
    </SafeAreaView>
  );
};

// TODO Add some padding to the top, as difficulties displaying on device
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
  },
  chains: {
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
});

export default MainScreen;
