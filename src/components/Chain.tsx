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
    let list: HabitType[] = [...habitList];
    let habit = {
      ...list[index],
      isComplete: true,
    };
    list[index] = habit;
    setHabitList(...(list as HabitType[]));
  };

  let habitKeyCount = 0;

  return (
    <View style={styles.container}>
      {habitList.map((habit) => (
        <Habit key={habitKeyCount++} {...habit} />
      ))}
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
