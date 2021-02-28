import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import { ALIZARIN_RED } from "../common/styles";
import DeleteDialogBox, { IDeleteDialogBoxProps } from "./DeleteDialogBox";

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

  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

  const handleDelete = () => {
    setDeleteDialogVisible(false);
    deleteButtonPress!();
  };

  const deleteDialogProps: IDeleteDialogBoxProps = {
    title: "Are you sure you want to delete this Habit?",
    visible: deleteDialogVisible,
    noButtonPress: cancelButtonPress,
    yesButtonPress: handleDelete,
  };

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
            onPress={() => setDeleteDialogVisible(true)}
          />
        )}
        <Dialog.Button label="Cancel" onPress={() => cancelButtonPress()} />
        <Dialog.Button label="OK" onPress={() => OKButtonPress()} />
      </Dialog.Container>
      {deleteDialogVisible && <DeleteDialogBox {...deleteDialogProps} />}
    </View>
  );
};

export default DialogBox;
