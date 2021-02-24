import React, { useState, useEffect, useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";
import styles from "../common/styles";
import { HabitContext } from "./HabitContext";
import ProgressBar from "./ProgressBar";

export interface IHabit {
  index: number;
  text: string;
  isComplete: boolean;
  tryMarkHabit?: Function;
}

const Habit = (props: IHabit) => {
  let { text, index, isComplete, tryMarkHabit } = props;

  const [tempText, setTempText] = useState("");
  const [habitText, setHabitText] = useState(text);
  const [visible, setVisible] = useState(false);

  const handleOK = () => {
    setVisible(false);
    setHabitText(tempText);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.habit, isComplete ? styles.complete : styles.incomplete]}
        onPress={() => tryMarkHabit!(index)}
        onLongPress={() => setVisible(true)}
      >
        <Text style={styles.chainText} numberOfLines={3} ellipsizeMode={"tail"}>
          {habitText}
        </Text>
      </TouchableOpacity>
      <ProgressBar inProgress={isComplete}></ProgressBar>
      {visible && (
        <View>
          <Dialog.Container visible={visible} avoidKeyboard={true}>
            <Dialog.Title>Start Chain with First Habit</Dialog.Title>
            <Dialog.Input
              defaultValue={"Enter Habit Name"}
              autoFocus
              onChangeText={(input) => setTempText(input)}
            ></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
            <Dialog.Button label="OK" onPress={() => handleOK()} />
          </Dialog.Container>
        </View>
      )}
    </>
  );
};

export default Habit;
