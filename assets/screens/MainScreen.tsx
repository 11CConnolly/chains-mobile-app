import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Habit from "../components/Habit";

const MainScreen = () => {
  const [chains, setChains] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Welcome to the Chains App! Start buliding habits now...</Text>
      <Habit />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
