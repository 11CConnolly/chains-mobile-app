import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";
import CustomText from "../CustomText";
import styles from "../../common/styles";
import DialogBox, { IDialogBoxProps } from "../DialogBox";
import ProgressBar from "./ProgressBar";

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
      AnimationRef.current?.pulse(500);
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
            maxFontSizeMultiplier={0}
            style={styles.chainText}
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
