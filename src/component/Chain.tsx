import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../common/styles";
import { HabitContext } from "./HabitContext";
import Habit, { IHabit } from "./Habit";

export interface IChain {
  habits: IHabit[];
  index: number;
  isComplete: boolean;
}

const Chain = (props: IChain) => {
  const { index } = props;
  const { chains, setChains, markHabit, markChain } = useContext(HabitContext);

  const habits = chains[index].habits;

  const tryMarking = (habitIndex: number) => {
    if (habitIndex === 0 || chains[index].habits[habitIndex - 1].isComplete) {
      markHabit(index, habitIndex);
      if (habitIndex === habits.length - 1) {
        markChain(index);
      }
    }
  };

  return (
    <View style={styles.chain}>
      {habits.map((habit, i) => (
        <Habit {...habit} key={i++} tryMarkHabit={tryMarking}></Habit>
      ))}
    </View>
  );
};

export default Chain;
