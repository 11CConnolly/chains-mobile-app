import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "../common/styles";
import { HabitProvider } from "../state/HabitContext";

export default function MilestonesScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HabitProvider>
        <Text>Hello World</Text>
      </HabitProvider>
    </SafeAreaView>
  );
}
