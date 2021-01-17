import React, { useState, useEffect, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import Habit from "./Habit";

export type HabitType = {
  text: string;
  index: number;
  isComplete: boolean;
  tryMarkHabit: (index: number) => void;
};

const Chain = (props: any) => {
  const [habitList, setHabitList] = useState<HabitType[]>([]);

  // Set the initial state once
  // TODO Replace with dynamic list
  useEffect(() => {
    setHabitList([
      {
        text: "1",
        index: 0,
        isComplete: false,
        tryMarkHabit: tryMarkHabitAsComplete,
      },
      {
        text: "2",
        index: 1,
        isComplete: false,
        tryMarkHabit: tryMarkHabitAsComplete,
      },
      {
        text: "3",
        index: 2,
        isComplete: false,
        tryMarkHabit: tryMarkHabitAsComplete,
      },
      {
        text: "4",
        index: 3,
        isComplete: false,
        tryMarkHabit: tryMarkHabitAsComplete,
      },
    ]);
  }, []);

  // Only is previous item is complete, let habit be marked as complete
  const tryMarkHabitAsComplete = (index: number) => {
    setHabitList((list) =>
      list.map((habit, i) =>
        i === index ? { ...habit, isComplete: true } : habit
      )
    );
  };

  let habitKeyCount = 0;

  return (
    <View style={styles.container}>
      {habitList.map((habit) => (
        <Habit key={habitKeyCount++} {...habit} />
      ))}
      {console.log(habitList)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export default Chain;
