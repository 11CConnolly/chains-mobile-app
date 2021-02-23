import React, { useState, useEffect, useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../common/styles";
import { HabitContext } from "./HabitContext";

export interface IHabit {
  index: number;
  text: string;
  isComplete: boolean;
  tryMarkHabit?: Function;
}

const Habit = (props: IHabit) => {
  let { text, index, isComplete, tryMarkHabit } = props;

  return (
    <TouchableOpacity
      style={[styles.habit, isComplete ? styles.complete : styles.incomplete]}
      onPress={() => tryMarkHabit!(index)}
    >
      <Text style={styles.chainText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Habit;
