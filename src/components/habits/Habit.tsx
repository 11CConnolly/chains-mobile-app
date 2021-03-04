import React, { useState, useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import styles from "../../common/styles";
import DialogBox, { IDialogBoxProps } from "../DialogBox";
import ProgressBar from "./ProgressBar";

export interface IHabit {
  index: number;
  text: string;
  isComplete: boolean;
  tryMarkHabit?: Function;
  deleteHabit?: Function;
}

const Habit = (props: IHabit) => {
  let { text, index, isComplete = false, tryMarkHabit, deleteHabit } = props;

  const [habitText, setHabitText] = useState(text);
  const [tempText, setTempText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHabitText(text);
  }, [text]);

  const handleOK = () => {
    setVisible(false);
    setHabitText(tempText);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
    deleteHabit!(index);
  };

  const dialogBoxProps: IDialogBoxProps = {
    title: "Edit Habit",
    placeholderText: habitText,
    visible: visible,
    cancelButtonPress: handleCancel,
    OKButtonPress: handleOK,
    onChangeFunc: setTempText,
    deleteButtonPress: handleDelete,
    showDelete: true,
  };

  const AnimatedTouchable = Animatable.createAnimatableComponent(
    TouchableOpacity
  );

  const handlePress = () => {
    if (tryMarkHabit!(index) && ref) {
      console.log("Pulse");
    }
  };

  const ref = useRef<typeof AnimatedTouchable & TouchableOpacity>(null);

  return (
    <>
      <AnimatedTouchable
        style={[styles.habit, isComplete ? styles.complete : styles.incomplete]}
        onPress={() => handlePress()}
        onLongPress={() => setVisible(true)}
      >
        <Text style={styles.chainText} numberOfLines={3} ellipsizeMode={"tail"}>
          {habitText}
        </Text>
      </AnimatedTouchable>
      <ProgressBar inProgress={isComplete}></ProgressBar>
      {visible && <DialogBox {...dialogBoxProps} />}
    </>
  );
};

export default Habit;
