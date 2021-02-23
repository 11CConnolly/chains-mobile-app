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
  const { chains, setChains, markHabit } = useContext(HabitContext);

  const habits = chains[index].habits;

  const tryMarkHabit = (habitIndex: number) => {
    if (habitIndex === 0 || chains[index].habits[habitIndex - 1].isComplete) {
      markHabit(index, habitIndex);
    }
  };

  return (
    <View style={styles.chain}>
      {habits.map((habit, i) => (
        <Habit {...habit} key={i++} tryMarkHabit={tryMarkHabit}></Habit>
      ))}
    </View>
  );
};

export default Chain;
