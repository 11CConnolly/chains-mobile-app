import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ActionDialog from "./ActionDialog";

type HabitType = {
  text: string;
};

const Habit = ({ text }: HabitType) => {
  const [complete, setComplete] = useState<Boolean>(false);

  const handleOnLongPress = () => {
    return <ActionDialog text="Are you sure you want to delete this habit?" />;
  };

  return (
    <TouchableOpacity
      style={complete ? styles.completeHabit : styles.uncompleteHabit}
      onPress={() => setComplete(!complete)}
      onLongPress={() => handleOnLongPress()}
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
