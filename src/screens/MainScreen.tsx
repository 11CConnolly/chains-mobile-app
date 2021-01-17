import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import Chain from "../components/Chain";
import { TopBar } from "../components/TopBar";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.chains}>
        <Chain />
      </View>
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
