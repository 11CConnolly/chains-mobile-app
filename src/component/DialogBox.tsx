import React from "react";
import { Text, View } from "react-native";
import Dialog from "react-native-dialog";

export interface IDialogBoxProps {
  title: string;
  placeholderText: string;
  OKButtonPress: Function;
  cancelButtonPress: Function;
  onChangeFunc: Function;
  visible: boolean;
}

const DialogBox = (props: IDialogBoxProps) => {
  let {
    title,
    placeholderText,
    OKButtonPress,
    cancelButtonPress,
    onChangeFunc,
    visible,
  } = props;

  return (
    <View>
      <Dialog.Container visible={visible} avoidKeyboard={true}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Input
          placeholder={placeholderText}
          onChangeText={(input) => onChangeFunc(input)}
        ></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={() => cancelButtonPress()} />
        <Dialog.Button label="OK" onPress={() => OKButtonPress()} />
      </Dialog.Container>
    </View>
  );
};

export default DialogBox;
