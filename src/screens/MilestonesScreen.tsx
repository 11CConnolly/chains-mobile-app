import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "../common/styles";
import TopBar from "../components/chains/TopBar";
import MilestonesContainer from "../components/containers/MilestonesContainer";

const MilestonesScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.topBar}>
        <Text style={{ ...styles.habitText, fontSize: 32 }}>Hello</Text>
      </View>
      <MilestonesContainer />
    </SafeAreaView>
  );
};

export default MilestonesScreen;
