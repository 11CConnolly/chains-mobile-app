import { StyleSheet, StatusBar, Platform } from "react-native";
import { COLOURS, CHAIN_SIZE } from "./constants";

export default StyleSheet.create({
  // Style for MainScreen
  screenContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: COLOURS.CLOUDS_WHITE,
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
  incomplete: {
    backgroundColor: COLOURS.MIDNIGHT_BLUE,
  },
  complete: {
    backgroundColor: COLOURS.LIGHT_GREEN,
  },
  // Styles for TopBar
  topBar: {
    width: "100%",
    display: "flex",
    height: 70,
    backgroundColor: COLOURS.MIDNIGHT_BLUE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  chainCount: {
    color: COLOURS.CLOUDS_WHITE,
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
    borderBottomColor: COLOURS.BLACK,
    borderRadius: 3,
    maxHeight: 34,
    width: "80%",
  },
  chainTitle: {
    alignSelf: "flex-start",
    color: COLOURS.BLACK,
    fontSize: 24,
    borderTopWidth: 2,
    borderTopColor: COLOURS.BLACK,
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
  habitText: {
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    color: COLOURS.CLOUDS_WHITE,
    fontSize: 13,
  },
  // Styles for Add Buttons
  addButton: {
    margin: 2,
    height: CHAIN_SIZE,
    width: CHAIN_SIZE,
    borderRadius: CHAIN_SIZE / 2,
    borderColor: COLOURS.MIDNIGHT_BLUE,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    justifyContent: "center",
    padding: 10,
    color: COLOURS.MIDNIGHT_BLUE,
    fontSize: 30,
  },
  progressBar: {
    width: 15,
    height: 3,
    top: CHAIN_SIZE / 2,
  },
});
