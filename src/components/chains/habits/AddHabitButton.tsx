import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import styles from "../../../common/styles";
import DialogBox, { IDialogBoxProps } from "../../dialogs/DialogBox";
import { HabitContext } from "../../../state/HabitContext";
import CustomText from "../../common/CustomText";

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
