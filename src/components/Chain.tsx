import React, { useState, useEffect, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChainToDisplay } from "./ChainsDisplay";
import Habit from "./Habit";

export type HabitType = {
  text: string;
  index: number;
  isComplete: boolean;
  tryMarkHabit: (index: number) => void;
};

const Chain = (props: any) => {
  const [habitList, setHabitList] = useState<HabitType[]>([]);

  // TODO Replace with dynamic list
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

  const tryMarkHabitAsComplete = (index: number) => {
    // Only is previous item is complete, or is first habit, let habit be marked as complete
    setHabitList((list) =>
      list.map((habit, i) =>
        i === index
          ? {
              ...habit,
              isComplete:
                index === 0 || list[index - 1].isComplete === true
                  ? true
                  : false,
            }
          : habit
      )
    );

    // Final habit, mark chain as complete
    if (habitList.length === index) props.markChainAsComplete();
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
    display: "flex",
    height: 100,
    paddingTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export default Chain;
