import React, { useState, useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Dialog from "react-native-dialog";
import styles from "../common/styles";
import DialogBox, { IDialogBoxProps } from "./DialogBox";
import { HabitContext } from "./HabitContext";

export interface IAddHabitButton {
  chainIndex: number;
}

const AddChainButton = (props: IAddHabitButton) => {
  const { chainIndex } = props;
  const { addHabit } = useContext(HabitContext);

  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOK = () => {
    setVisible(false);
    addHabit(chainIndex, text);
  };

  const dialogBoxProps: IDialogBoxProps = {
    title: "Add new Habit",
    placeholderText: "Enter Habit",
    visible: visible,
    cancelButtonPress: handleCancel,
    OKButtonPress: handleOK,
    onChangeFunc: setText,
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.addButton]}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
      {visible && <DialogBox {...dialogBoxProps} />}
    </>
  );
};

export default AddChainButton;
