import { Ionicons } from "@expo/vector-icons";
import React, { useState, useReducer } from "react";
import { CLOUDS_WHITE } from "../common/styles";
import InfoDialog, { IInfoDialogProps } from "./dialogs/InfoDialog";

const InformationIcon = () => {
  const visibleReducer = (state: any, action: any) => {
    switch (action.type) {
      case "setVisible":
        return action.value;
      default:
        return state;
    }
  };

  const [visible, dispatch] = useReducer(visibleReducer, false);

  const INFO_TITLE = "Welcome to Chains habit tracker!";
  const INFO_TEXT = `Chains works by building strong patterns of habits to get into and makes it easier to make big changes.

To start a chain, tap the ➕ icon to create the first habit in your chain!

To add habits to a chain, tap the next ➕ icon at the end of the chain.

To complete a habit, simply tap the habit once you've finished it 🎉 Complete all habits to finish the chain 
  
Long press a habit to edit or delete it.

Any feedback, questions, problems you have, or things you want to see please email me at: callumc11@gmail.com :)`;

  const handleOK = () => {
    dispatch({ type: "setVisible", value: true });
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
        onPress={() => dispatch({ type: "setVisible", value: true })}
        style={{ position: "absolute", right: 10 }}
      />
      {visible && <InfoDialog {...infoDialogProps} />}
    </>
  );
};

export default InformationIcon;
