import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../common/styles";
import CustomText from "../common/CustomText";
import Milestone, { IMilestone } from "./Milestone";

export interface IMilestoneChain {
  index: number;
  title: string;
  milestones: IMilestone[];
}

const MilestoneChain = (props: IMilestoneChain) => {
  const { title, milestones } = props;

  return (
    <View style={styles.chainWrapper}>
      <View style={styles.chainTitleWrapper}>
        <CustomText heavy style={styles.chainTitle}>
          {title}
        </CustomText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chain}>
          {milestones.map((milestone, i) => (
            <Milestone {...milestone} key={i++}></Milestone>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MilestoneChain;
