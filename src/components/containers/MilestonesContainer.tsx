import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../common/styles";
import MilestoneChain, { IMilestoneChain } from "../Milestones/MilestoneChain";

const MilestonesContainer = () => {
  const [milestoneChains, setmilestoneChains] = useState<IMilestoneChain[]>([
    {
      title: "Completed Chains",
      milestones: [
        { number: 1, isComplete: false },
        { number: 5, isComplete: false },
        { number: 10, isComplete: false },
        { number: 25, isComplete: false },
        { number: 50, isComplete: false },
        { number: 100, isComplete: false },
        { number: 200, isComplete: false },
        { number: 500, isComplete: false },
        { number: 1000, isComplete: false },
      ],
      index: 0,
    },
  ]);

  return (
    <View style={styles.chainsContainer}>
      <ScrollView>
        {milestoneChains.map((milestoneChain, i) => (
          <MilestoneChain {...milestoneChain} index={i} key={i++} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MilestonesContainer;
