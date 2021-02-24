import React, { useState, useEffect, useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";
import styles from "../common/styles";
import DialogBox, { IDialogBoxProps } from "./DialogBox";
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

  const handleCancel = () => {
    setVisible(false);
  };

  const dialogBoxProps: IDialogBoxProps = {
    title: "Edit Habit",
    placeholderText: habitText,
    visible: visible,
    cancelButtonPress: handleCancel,
    OKButtonPress: handleOK,
    onChangeFunc: setTempText,
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
      {visible && <DialogBox {...dialogBoxProps} />}
    </>
  );
};

export default Habit;
