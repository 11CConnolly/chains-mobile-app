import React, { useContext } from "react";
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
  const { totalCompletedChains } = useContext(HabitContext);

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
            const complete =
              totalCompletedChains >= milestone.number ? true : false;

            return (
              <Milestone
                {...milestone}
                key={i++}
                isComplete={complete}
              ></Milestone>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MilestoneChain;
