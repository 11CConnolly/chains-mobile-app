import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import Habit, { IHabit } from "../habits/Habit";
import AddHabitButton from "../habits/AddHabitButton";

export interface IChain {
  habits: IHabit[];
  index: number;
  isComplete: boolean;
}

const Chain = (props: IChain) => {
  const { index } = props;
  const { chains, markHabit, removeHabit } = useContext(HabitContext);

  const habits = chains[index].habits;

  const tryMarking = (habitIndex: number) => {
    if (habitIndex === 0 || chains[index].habits[habitIndex - 1].isComplete) {
      markHabit(index, habitIndex);
      return true;
    }
  };

  const deleteHabit = (habitIndex: number) => {
    removeHabit(index, habitIndex);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps={"always"}
    >
      <View style={styles.chain}>
        {habits.map((habit, i) => (
          <Habit
            {...habit}
            index={i}
            key={i++}
            tryMarkHabit={tryMarking}
            deleteHabit={deleteHabit}
          ></Habit>
        ))}
        <AddHabitButton chainIndex={index} />
      </View>
    </ScrollView>
  );
};

export default Chain;
