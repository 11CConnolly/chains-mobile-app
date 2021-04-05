import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../common/styles";
import MilestonesContainer from "../components/containers/MilestonesContainer";
import { HabitProvider } from "../state/HabitContext";

const MilestonesScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HabitProvider>
        <MilestonesContainer />
      </HabitProvider>
    </SafeAreaView>
  );
};

export default MilestonesScreen;
