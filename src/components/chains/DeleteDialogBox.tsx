import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import { ALIZARIN_RED } from "../../common/styles";

export interface IDeleteDialogBoxProps {
  title: string;
  visible: boolean;
  noButtonPress: Function;
  yesButtonPress: Function;
}

const DeleteDialogBox = (props: IDeleteDialogBoxProps) => {
  let { title, visible, noButtonPress, yesButtonPress } = props;

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Button
          style={{ color: ALIZARIN_RED }}
          label="Yes"
          onPress={() => yesButtonPress()}
        />
        <Dialog.Button label="No" onPress={() => noButtonPress()} />
      </Dialog.Container>
    </View>
  );
};

export default DeleteDialogBox;
