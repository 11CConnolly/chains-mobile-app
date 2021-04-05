import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import ChainsContainer from "../components/containers/ChainsContainer";
import TopBar from "../components/topBar/TopBar";
import styles from "../common/styles";
import { HabitProvider } from "../state/HabitContext";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HabitProvider>
        <TopBar />
        <ChainsContainer />
      </HabitProvider>
    </SafeAreaView>
  );
};

export default MainScreen;
