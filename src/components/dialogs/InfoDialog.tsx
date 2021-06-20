import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";
import { ALIZARIN_RED } from "../../common/styles";

export interface IInfoDialogProps {
  title: string;
  description: string;
  visible: boolean;
  okButtonPress: Function;
}

const InfoDialog = (props: IInfoDialogProps) => {
  let { title, description, visible, okButtonPress } = props;

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        <Dialog.Button
          style={{ color: ALIZARIN_RED }}
          label="Ok"
          onPress={() => okButtonPress()}
        />
      </Dialog.Container>
    </View>
  );
};

export default InfoDialog;
