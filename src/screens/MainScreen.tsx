import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import ChainsDisplay from "../components/ChainsDisplay";
import { TopBar } from "../components/TopBar";

const MainScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar count={counter} />
      <ChainsDisplay incCounter={incrementCounter} />
    </SafeAreaView>
  );
};

// TODO Add some padding to the top, as difficulties displaying on device
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
