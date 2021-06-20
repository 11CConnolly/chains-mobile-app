import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../common/styles";
import MilestonesContainer from "../components/containers/MilestonesContainer";

const MilestonesScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <MilestonesContainer />
    </SafeAreaView>
  );
};

export default MilestonesScreen;
