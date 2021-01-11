import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Chain from "../components/Chain";

const MainScreen = () => {
  const [chains, setChains] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chains}>
        <Chain />
        <Chain />
        <Chain />
        <Chain />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  chains: {
    flex: 1,
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
});

export default MainScreen;
