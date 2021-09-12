import { StyleSheet, StatusBar, Platform } from "react-native";
import { COLOURS, CHAIN_SIZE } from "./constants";

export default StyleSheet.create({
  // Style for Container
  milestonesContainer: {
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  milestonesTitle: {
    alignSelf: "flex-start",
    color: COLOURS.BLACK,
    fontSize: 24,
  },
  milestoneCircle: {
    width: CHAIN_SIZE - 8,
    height: CHAIN_SIZE - 8,
    borderRadius: 50,
    position: "absolute",
    borderWidth: 1.5,
    borderColor: COLOURS.CLOUDS_WHITE,
  },
});
