import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";

export interface INewChainDialogBox {
  visible: boolean;
  OKButtonPress: Function;
  cancelButtonPress: Function;
  onChangeTitle: Function;
  onChangeHabit: Function;
}

const NewChainDialogBox = (props: INewChainDialogBox) => {
  let {
    visible,
    OKButtonPress,
    cancelButtonPress,
    onChangeTitle,
    onChangeHabit,
  } = props;

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Add a Title for your Chain</Dialog.Title>
        <Dialog.Input
          maxLength={24}
          placeholder={"Title"}
          onChangeText={(input) => onChangeTitle(input)}
        ></Dialog.Input>
        <Dialog.Description>Add your first Habit</Dialog.Description>
        <Dialog.Input
          placeholder={"Habit"}
          onChangeText={(input) => onChangeHabit(input)}
        ></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={() => cancelButtonPress()} />
        <Dialog.Button label="OK" onPress={() => OKButtonPress()} />
      </Dialog.Container>
    </View>
  );
};

export default NewChainDialogBox;
