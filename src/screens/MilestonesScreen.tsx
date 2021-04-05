import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../common/styles";
import CustomText from "../components/common/CustomText";
import { HabitProvider } from "../state/HabitContext";

export default function MilestonesScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HabitProvider>
        <View style={styles.milestonesContainer}>
          <View>
            <CustomText heavy style={styles.milestonesTitle}>
              Completed Chains
            </CustomText>
            <Text>04/04/2021: 5</Text>
            <Text>04/04/2021: 6</Text>
            <Text>04/04/2021: 7</Text>
          </View>
          <View>
            <CustomText heavy style={styles.milestonesTitle}>
              Milestones
            </CustomText>
            <Text>5 Chains Completed ✔️</Text>
            <Text>6 Chains Completed ✔️</Text>
            <Text>7 Chains Completed ✔️</Text>
            <Text>8 Chains Completed ❌</Text>
          </View>
        </View>
      </HabitProvider>
    </SafeAreaView>
  );
}
