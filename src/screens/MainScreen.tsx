import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import ChainsContainer from "../component/ChainsContainer";
import TopBar from "../component/TopBar";
import styles from "../common/styles";
import { HabitProvider } from "../component/HabitContext";

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
