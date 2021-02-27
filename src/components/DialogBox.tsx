import React from "react";
import { Text, View } from "react-native";
import Dialog from "react-native-dialog";
import styles, { ALIZARIN_RED } from "../common/styles";

export interface IDialogBoxProps {
  title: string;
  visible: boolean;
  placeholderText: string;
  OKButtonPress: Function;
  cancelButtonPress: Function;
  onChangeFunc: Function;
  showDelete?: boolean;
  deleteButtonPress?: Function;
}

const DialogBox = (props: IDialogBoxProps) => {
  let {
    title,
    visible,
    placeholderText,
    OKButtonPress,
    cancelButtonPress,
    onChangeFunc,
    showDelete,
    deleteButtonPress,
  } = props;

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Input
          placeholder={placeholderText}
          onChangeText={(input) => onChangeFunc(input)}
        ></Dialog.Input>
        {showDelete && (
          <Dialog.Button
            label="Delete"
            style={{ color: ALIZARIN_RED }}
            onPress={() => deleteButtonPress!()}
          />
        )}
        <Dialog.Button label="Cancel" onPress={() => cancelButtonPress()} />
        <Dialog.Button label="OK" onPress={() => OKButtonPress()} />
      </Dialog.Container>
    </View>
  );
};

export default DialogBox;
