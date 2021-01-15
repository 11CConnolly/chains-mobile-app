import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ActionDialog from "./ActionDialog";

type HabitType = {
  text: string;
};

const Habit = ({ text }: HabitType) => {
  const [complete, setComplete] = useState<boolean>(false);

  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={complete ? styles.completeHabit : styles.uncompleteHabit}
      onPress={() => setComplete(!complete)}
      onLongPress={() => setShowDialog(true)}
    >
      <Text style={styles.chainText}>{text}</Text>
      // TODO Include callback function
      {showDialog && (
        <ActionDialog text="Are you sure you want to delete this Habit?" />
      )}
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
