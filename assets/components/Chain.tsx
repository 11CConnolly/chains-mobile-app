import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Habit from "./Habit";

type HabitType = {
  text: string;
};

const Chain = (props: any) => {
  const [habitList, setHabitList] = useState<HabitType[]>([]);

  // Set the initial state once
  useEffect(() => {
    setHabitList([
      {
        text: "1",
      },
      {
        text: "2",
      },
      {
        text: "3",
      },
    ]);
  }, []);

  let habitKeyCount = 0;

  return (
    <View style={styles.container}>
      {habitList.map((h) => (
        <Habit key={habitKeyCount++} text={h.text} />
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
