import { StyleSheet, StatusBar, Platform } from "react-native";

export const LIGHT_GREEN = "#2ecc71";
export const ALIZARIN_RED = "#e74c3c";
export const CLOUDS_WHITE = "#ecf0f1";
export const MIDNIGHT_BLUE = "#2c3e50";
export const PURPLE = "#a15dbd";
export const BLACK = "#000000";

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
    flex: 1,
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
    height: 80,
    backgroundColor: MIDNIGHT_BLUE,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chainCount: {
    color: CLOUDS_WHITE,
    fontSize: 32,
  },
  // Style for Burger Menu
  menuLine: {
    width: 30,
    height: 3,
    backgroundColor: BLACK,
    marginLeft: 20,
    marginTop: 5,
  },
  // Style for Chains
  chain: {
    display: "flex",
    height: 110,
    paddingTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  // Styles for Habits
  habit: {
    margin: 2,
    height: 110,
    width: 110,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  incomplete: {
    backgroundColor: MIDNIGHT_BLUE,
  },
  complete: {
    backgroundColor: LIGHT_GREEN,
  },
  chainText: {
    justifyContent: "center",
    padding: 10,
    color: CLOUDS_WHITE,
    fontSize: 16,
  },
  // Styles for Add Buttons
  addButton: {
    margin: 2,
    height: 110,
    width: 110,
    borderRadius: 55,
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
    top: 55,
  },
});
