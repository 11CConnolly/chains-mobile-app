import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import CustomText from "../common/CustomText";
import Milestone, { IMilestone } from "./Milestone";

export interface IMilestoneChain {
  title: string;
  milestones: IMilestone[];
}

const MilestoneChain = (props: IMilestoneChain) => {
  const { title, milestones } = props;
  const { completeChainsNum } = useContext(HabitContext);

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
            return (
              <Milestone
                {...milestone}
                key={i++}
                isComplete={completeChainsNum >= milestone.number}
              ></Milestone>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MilestoneChain;
