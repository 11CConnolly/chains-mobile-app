import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import CustomText from "../common/CustomText";
import styles from "../../common/styles";
import DialogBox, { IDialogBoxProps } from "../dialogs/DialogBox";
import ProgressBar from "./ProgressBar";
import Toast from "react-native-toast-message";

export interface IHabit {
  index: number;
  text: string;
  isComplete: boolean;
  tryMarkHabit?: Function;
  deleteHabit?: Function;
}

const Habit = (props: IHabit) => {
  let { text, index, isComplete = false, tryMarkHabit, deleteHabit } = props;

  const [habitText, setHabitText] = useState(text);
  const [tempText, setTempText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHabitText(text);
  }, [text]);

  const handleOK = () => {
    setVisible(false);
    setHabitText(tempText);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
    deleteHabit!(index);
  };

  const dialogBoxProps: IDialogBoxProps = {
    title: "Edit Habit",
    placeholderText: habitText,
    visible: visible,
    cancelButtonPress: handleCancel,
    OKButtonPress: handleOK,
    onChangeFunc: setTempText,
    deleteButtonPress: handleDelete,
    showDelete: true,
  };

  const AnimationRef = useRef(null);

  const handlePress = () => {
    if (tryMarkHabit!(index) && AnimationRef) {
      AnimationRef.current?.pulse(1000);
    } else {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Chains must be completed in order!",
        text2: "Please complete the previous habit before this one",
      });
    }
  };

  return (
    <>
      <Animatable.View ref={AnimationRef} animation="zoomIn">
        <TouchableOpacity
          style={[
            styles.habit,
            isComplete ? styles.complete : styles.incomplete,
          ]}
          onPress={() => handlePress()}
          onLongPress={() => setVisible(true)}
        >
          <CustomText
            sansSerif
            maxFontSizeMultiplier={0}
            style={styles.habitText}
            numberOfLines={3}
            ellipsizeMode={"tail"}
          >
            {habitText}
          </CustomText>
        </TouchableOpacity>
      </Animatable.View>
      <ProgressBar inProgress={isComplete}></ProgressBar>
      {visible && <DialogBox {...dialogBoxProps} />}
    </>
  );
};

export default Habit;
