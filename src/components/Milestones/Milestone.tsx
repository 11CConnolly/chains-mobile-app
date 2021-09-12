import React from "react";
import { View } from "react-native";
import styles from "../../common/MainStyles";
import MilestoneStyles from "../../common/MilestoneStyles";
import ProgressBar from "../chains/habits/ProgressBar";
import CustomText from "../common/CustomText";

export interface IMilestone {
  number: number;
  isComplete: boolean;
  showProgress?: boolean;
}

const Milestone = (props: IMilestone) => {
  let { number, isComplete, showProgress = true } = props;

  return (
    <>
      <View
        style={[styles.habit, isComplete ? styles.complete : styles.incomplete]}
      >
        <View style={MilestoneStyles.milestoneCircle}></View>
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
      {showProgress && <ProgressBar inProgress={isComplete}></ProgressBar>}
    </>
  );
};

export default Milestone;
