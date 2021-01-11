import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HabitType = {
  text: string;
};

const Habit = ({ text }: HabitType) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.chainText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "red",
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  chainText: {
    color: "white",
  },
});

export default Habit;
