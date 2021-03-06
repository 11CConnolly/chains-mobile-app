import { StyleSheet, StatusBar, Platform } from "react-native";

export const LIGHT_GREEN = "#2ecc71";
export const ALIZARIN_RED = "#e74c3c";
export const CLOUDS_WHITE = "#ecf0f1";
export const MIDNIGHT_BLUE = "#2c3e50";
export const PURPLE = "#a15dbd";
export const BLACK = "#000000";

const CHAIN_SIZE = 80;

export default StyleSheet.create({
  // Style for MainScreen
  screenContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: CLOUDS_WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  // Style for Container
  chainsContainer: {
    width: "100%",
    flex: 1,
    padding: 2,
    alignSelf: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  // Styles for TopBar
  topBar: {
    width: "100%",
    display: "flex",
    height: 70,
    backgroundColor: MIDNIGHT_BLUE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chainCount: {
    color: CLOUDS_WHITE,
    fontSize: 32,
    paddingTop: 10,
  },
  // Style for Chains
  chainWrapper: {
    paddingTop: 2,
    flex: 1,
  },
  chainTitleWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: BLACK,
    borderRadius: 3,
    maxHeight: 34,
    width: "80%",
  },
  chainTitle: {
    alignSelf: "flex-start",
    color: BLACK,
    fontSize: 24,
    borderTopWidth: 2,
    borderTopColor: BLACK,
    borderRadius: 3,
  },
  chain: {
    height: CHAIN_SIZE,
    marginTop: 5,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  // Styles for Habits
  habit: {
    margin: 2,
    height: CHAIN_SIZE,
    width: CHAIN_SIZE,
    borderRadius: CHAIN_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.9,
    elevation: 8,
  },
  incomplete: {
    backgroundColor: MIDNIGHT_BLUE,
  },
  complete: {
    backgroundColor: LIGHT_GREEN,
  },
  habitText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    color: CLOUDS_WHITE,
    fontSize: 13,
  },
  // Styles for Add Buttons
  addButton: {
    margin: 2,
    height: CHAIN_SIZE,
    width: CHAIN_SIZE,
    borderRadius: CHAIN_SIZE / 2,
    borderColor: MIDNIGHT_BLUE,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    justifyContent: "center",
    padding: 10,
    color: MIDNIGHT_BLUE,
    fontSize: 30,
  },
  progressBar: {
    width: 15,
    height: 3,
    top: CHAIN_SIZE / 2,
  },

  /* STYLES FOR MILESTONES SCREEN */
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
    color: BLACK,
    fontSize: 24,
  },
  milestoneCircle: {
    width: CHAIN_SIZE - 8,
    height: CHAIN_SIZE - 8,
    borderRadius: 50,
    position: "absolute",
    borderWidth: 1.5,
    borderColor: CLOUDS_WHITE,
  },
});
