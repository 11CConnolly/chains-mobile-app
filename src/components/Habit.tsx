import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ActionDialog from "./ActionDialog";

type HabitType = {
  text: string;
};

const Habit = ({ text }: HabitType) => {
  const [complete, setComplete] = useState<Boolean>(false);

  return (
    <TouchableOpacity
      style={complete ? styles.completeHabit : styles.uncompleteHabit}
      onPress={() => setComplete(!complete)}
      onLongPress={() => console.log("Long Press")}
    >
      <Text style={styles.chainText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uncompleteHabit: {
    backgroundColor: "#e74c3c",
    margin: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  completeHabit: {
    backgroundColor: "#2ecc71",
    margin: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  chainText: {
    color: "white",
  },
});

export default Habit;
