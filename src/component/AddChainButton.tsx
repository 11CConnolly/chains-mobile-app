import React, { useState } from "react";
import react, { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Dialog from "react-native-dialog";
import styles from "../common/styles";
import { HabitContext } from "./HabitContext";

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

  return (
    <>
      <TouchableOpacity
        style={[styles.habit, styles.incomplete]}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.chainText}>+</Text>
      </TouchableOpacity>
      {visible && (
        <View>
          <Dialog.Container visible={visible} avoidKeyboard={true}>
            <Dialog.Title>Start Chain with First Habit</Dialog.Title>
            <Dialog.Input
              defaultValue={"Enter Habit Name"}
              autoFocus
              onChangeText={(input) => setText(input)}
            ></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={() => handleCancel()} />
            <Dialog.Button label="OK" onPress={() => handleOK()} />
          </Dialog.Container>
        </View>
      )}
    </>
  );
};

export default AddChainButton;
