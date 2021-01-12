import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type HabitType = {
  text: string;
};

const Habit = ({ text }: HabitType) => {
  const [complete, setComplete] = useState<Boolean>(false);

  return (
    <TouchableOpacity
      style={complete ? styles.completeHabit : styles.uncompleteHabit}
      onPress={() => setComplete(!complete)}
      onLongPress={() => console.log("Editting")}
    >
      <Text style={styles.chainText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uncompleteHabit: {
    backgroundColor: "red",
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  completeHabit: {
    backgroundColor: "green",
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
