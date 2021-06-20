import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { CLOUDS_WHITE } from "../common/styles";
import { INewChainDialogBox } from "./chains/NewChainDialogBox";
import DialogBox, { IDialogBoxProps } from "./dialogs/DialogBox";
import InfoDialog, { IInfoDialogProps } from "./dialogs/InfoDialog";

const InformationIcon = () => {
  const [visible, setVisible] = useState(false);

  const INFO_TITLE = "Welcome to Chains habit tracker!";
  const INFO_TEXT = `Chains works by building strong patterns of habits to get into and makes it easier to make big changes.

To start a chain, tap the ➕ icon to create the first habit in your chain!

To add habits to a chain, tap the next ➕ icon at the end of the chain.

To complete a habit, simply tap the habit once you've finished it 🎉 Complete all habits to finish the chain 
  
Long press a habit to edit or delete it.

Any feedback, questions, problems you have, or things you want to see please email me at: callumc11@gmail.com :)`;

  const handleOK = () => {
    setVisible(false);
  };

  const infoDialogProps: IInfoDialogProps = {
    title: INFO_TITLE,
    description: INFO_TEXT,
    visible: visible,
    okButtonPress: handleOK,
  };

  return (
    <>
      <Ionicons
        name={"information-circle-outline"}
        size={32}
        color={CLOUDS_WHITE}
        onPress={() => setVisible(true)}
        style={{ position: "absolute", right: 10 }}
      />
      {visible && <InfoDialog {...infoDialogProps} />}
    </>
  );
};

export default InformationIcon;
