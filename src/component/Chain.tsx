import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "../common/styles";
import { HabitContext } from "./HabitContext";
import Habit, { IHabit } from "./Habit";
import AddHabitButton from "./AddHabitButton";

export interface IChain {
  habits: IHabit[];
  index: number;
  isComplete: boolean;
}

const Chain = (props: IChain) => {
  const { index } = props;
  const { chains, markHabit, markChain } = useContext(HabitContext);

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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.chain}>
        {habits.map((habit, i) => (
          <Habit {...habit} key={i++} tryMarkHabit={tryMarking}></Habit>
        ))}
        <AddHabitButton chainIndex={index} />
      </View>
    </ScrollView>
  );
};

export default Chain;
