import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import CustomText from "../common/CustomText";
import Milestone, { IMilestone } from "./Milestone";

export enum TYPE_TO_CHECK {
  TotalChains,
  DailyChains,
}

export interface IMilestoneChain {
  title: string;
  milestones: IMilestone[];
  checkType: TYPE_TO_CHECK;
}

const MilestoneChain = (props: IMilestoneChain) => {
  const { title, milestones, checkType } = props;
  const { completeChainsNum, dailyChainsNum } = useContext(HabitContext);

  // Define the type of thing we want to check as our milestone
  let CompletedNumber = 0;
  switch (checkType) {
    case TYPE_TO_CHECK.TotalChains:
      CompletedNumber = completeChainsNum;
      break;
    case TYPE_TO_CHECK.DailyChains:
      CompletedNumber = dailyChainsNum;
      break;
    default:
      CompletedNumber = 0;
      console.log("Not good");
      break;
  }

  return (
    <View style={styles.chainWrapper}>
      <View style={styles.chainTitleWrapper}>
        <CustomText heavy style={styles.chainTitle}>
          {title}
        </CustomText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chain}>
          {milestones.map((milestone, i) => {
            const showProgress = i !== milestones.length - 1;
            return (
              <Milestone
                {...milestone}
                key={i++}
                isComplete={CompletedNumber >= milestone.number}
                showProgress={showProgress}
              ></Milestone>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MilestoneChain;
