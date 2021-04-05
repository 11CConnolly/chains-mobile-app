import React, { useState } from "react";
import react, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import CustomText from "../common/CustomText";
import NewChainDialogBox, {
  INewChainDialogBox,
} from "../dialogs/NewChainDialogBox";

export interface IAddChainButton {}

const AddChainButton = (props: IAddChainButton) => {
  const { addChain } = useContext(HabitContext);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOK = () => {
    setVisible(false);
    addChain(title, text);
  };

  const dialogBoxProps: INewChainDialogBox = {
    visible: visible,
    cancelButtonPress: handleCancel,
    OKButtonPress: handleOK,
    onChangeHabit: setText,
    onChangeTitle: setTitle,
  };

  return (
    <>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setVisible(true)}
      >
        <CustomText style={styles.addText}>+</CustomText>
      </TouchableOpacity>
      {visible && <NewChainDialogBox {...dialogBoxProps} />}
    </>
  );
};

export default AddChainButton;
