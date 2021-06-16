import React from "react";
import { SafeAreaView } from "react-native";
import ChainsContainer from "../components/containers/ChainsContainer";
import TopBar from "../components/chains/TopBar";
import styles from "../common/styles";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <TopBar />
      <ChainsContainer />
    </SafeAreaView>
  );
};

export default MainScreen;
