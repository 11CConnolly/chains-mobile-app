import React, { useState } from "react";
import react, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../../common/styles";
import DialogBox, { IDialogBoxProps } from "../DialogBox";
import { HabitContext } from "../../state/HabitContext";
import CustomText from "../../common/CustomText";

export interface IAddChainButton {}

const AddChainButton = (props: IAddChainButton) => {
  const { addChain } = useContext(HabitContext);

  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOK = () => {
    setVisible(false);
    addChain(text);
  };

  const dialogBoxProps: IDialogBoxProps = {
    title: "Add First Habit to New Chain",
    placeholderText: "Enter Habit",
    visible: visible,
    cancelButtonPress: handleCancel,
    OKButtonPress: handleOK,
    onChangeFunc: setText,
  };

  return (
    <>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setVisible(true)}
      >
        <CustomText style={styles.addText}>+</CustomText>
      </TouchableOpacity>
      {visible && <DialogBox {...dialogBoxProps} />}
    </>
  );
};

export default AddChainButton;
