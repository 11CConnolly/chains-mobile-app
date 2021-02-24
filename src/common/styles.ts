import { StyleSheet, StatusBar, Platform } from "react-native";

export const LIGHT_GREEN = "#2ecc71";
export const LIGHT_RED = "#e74c3c";
export const OFF_WHITE = "#ecf0f1";
export const DARK_BLUE = "#2c3e50";
export const BLACK = "#000000";

export default StyleSheet.create({
  // Style for MainScreen
  screenContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: OFF_WHITE,
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
    backgroundColor: LIGHT_RED,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chainCount: {
    color: OFF_WHITE,
    fontSize: 32,
    marginBottom: 10,
  },
  // Style for Burger Menu
  menuLine: {
    width: 30,
    height: 3,
    backgroundColor: LIGHT_RED,
    marginLeft: 20,
    marginTop: 5,
  },
  // Style for Chains
  chain: {
    display: "flex",
    height: 100,
    paddingTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  // Styles for Habits
  habit: {
    margin: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  incomplete: {
    backgroundColor: DARK_BLUE,
  },
  complete: {
    backgroundColor: LIGHT_GREEN,
  },
  chainText: {
    justifyContent: "center",
    padding: 10,
    color: OFF_WHITE,
    fontSize: 14,
  },
  // Styles for Habits
  progressBar: {
    width: 15,
    height: 3,
    top: 50,
  },
});
