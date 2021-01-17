import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { HabitType } from "./Chain";

const Habit = ({ text, index, isComplete, tryMarkHabit }: HabitType) => {
  return (
    <TouchableOpacity
      style={isComplete ? styles.completeHabit : styles.uncompleteHabit}
      onPress={() => tryMarkHabit(index)}
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
    backgroundColor: "#27ae60",
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
