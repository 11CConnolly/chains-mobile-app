import React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <PaperProvider>
      <MainScreen />
    </PaperProvider>
  );
}
