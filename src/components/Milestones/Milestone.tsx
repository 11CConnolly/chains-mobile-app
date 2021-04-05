import React from "react";
import { View } from "react-native";
import styles from "../../common/styles";
import ProgressBar from "../chains/habits/ProgressBar";
import CustomText from "../common/CustomText";

export interface IMilestone {
  number: number;
  isComplete: boolean;
}

const Milestone = (props: IMilestone) => {
  let { number, isComplete } = props;

  return (
    <>
      <View
        style={[styles.habit, isComplete ? styles.complete : styles.incomplete]}
      >
        <CustomText
          sansSerif
          maxFontSizeMultiplier={0}
          style={styles.habitText}
          numberOfLines={3}
          ellipsizeMode={"tail"}
        >
          {number}
        </CustomText>
      </View>
      <ProgressBar inProgress={isComplete}></ProgressBar>
    </>
  );
};

export default Milestone;
