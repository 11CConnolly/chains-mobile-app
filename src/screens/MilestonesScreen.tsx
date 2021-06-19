import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles, { CLOUDS_WHITE } from "../common/styles";
import MilestonesContainer from "../components/containers/MilestonesContainer";

const MilestonesScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <MilestonesContainer />
    </SafeAreaView>
  );
};

export default MilestonesScreen;
