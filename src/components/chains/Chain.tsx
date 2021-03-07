import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import Habit, { IHabit } from "../habits/Habit";
import AddHabitButton from "../habits/AddHabitButton";
import CustomText from "../CustomText";

export interface IChain {
  title: string;
  habits: IHabit[];
  index: number;
  isComplete: boolean;
}

const Chain = (props: IChain) => {
  const { index, title } = props;
  const { chains, markHabit, removeHabit } = useContext(HabitContext);

  const habits = chains[index].habits;

  const tryMarking = (habitIndex: number) => {
    const markedTrue = chains[index].habits[habitIndex].isComplete;
    if (habitIndex === 0 || chains[index].habits[habitIndex - 1].isComplete) {
      markHabit(index, habitIndex);
      return !markedTrue;
    }
  };

  const deleteHabit = (habitIndex: number) => {
    removeHabit(index, habitIndex);
  };

  return (
    <View style={styles.chainWrapper}>
      <View style={styles.chainTitleWrapper}>
        <CustomText
          heavy
          style={styles.chainTitle}
          onLongPress={() => console.log("Edit title")}
        >
          {title}
        </CustomText>
      </View>
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
    </View>
  );
};

export default Chain;
