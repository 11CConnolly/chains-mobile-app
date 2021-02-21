import React, { useState, useEffect, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChainType } from "./ChainsDisplay";
import Habit from "./Habit";

export type HabitType = {
  text: string;
  index: number;
  isComplete: boolean;
  tryMarkHabit?: (index: number) => void;
};

const Chain = ({
  index,
  isComplete,
  habits,
  markChainAsComplete,
}: ChainType) => {
  const [habitList, setHabitList] = useState<HabitType[]>([]);

  // TODO Replace with dynamic list
  // Set the initial state once
  useEffect(() => {
    // Attach habits w/ method to mark it as complete
    let initHabits = [...habits];
    initHabits.forEach((habit) => {
      habit.tryMarkHabit = tryMarkHabitAsComplete;
    });
    setHabitList(initHabits);
  }, []);

  const tryMarkHabitAsComplete = (habitIndex: number) => {
    // Only is previous item is complete, or is first habit, let habit be marked as complete
    setHabitList((list) =>
      list.map((habit, i) =>
        i === habitIndex
          ? {
              ...habit,
              isComplete:
                habitIndex === 0 || list[habitIndex - 1].isComplete === true
                  ? true
                  : false,
            }
          : habit
      )
    );

    // Final habit, mark chain as complete
    console.log(habitList.length + " - length and index - " + habitIndex);
    if (habitList.length === habitIndex) {
      markChainAsComplete(index);
    }
  };

  return (
    <View style={styles.container}>
      {habitList.map((habit, i) => (
        <Habit key={i++} {...habit} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 100,
    paddingTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export default Chain;
