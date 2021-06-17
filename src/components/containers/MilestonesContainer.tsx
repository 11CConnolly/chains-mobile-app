import React, { useContext, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { ContributionGraph, LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import MilestoneChain, { IMilestoneChain } from "../Milestones/MilestoneChain";

export interface ICommit {
  date: string;
  count: number;
}

const MilestonesContainer = () => {
  // Chart Stuff

  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 },
  ];

  // Milestone Stuff

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
    },
  ]);

  return (
    <View style={styles.chainsContainer}>
      <View>
        <ContributionGraph
          values={commitsData}
          endDate={new Date("2017-04-01")}
          numDays={105}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          tooltipDataAttrs={(value) => {
            return { "data-tooltip": "Tooltip: " + value };
          }}
        />
      </View>
      <ScrollView>
        {milestoneChains.map((milestoneChain, i) => (
          <MilestoneChain {...milestoneChain} key={i++} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MilestonesContainer;
