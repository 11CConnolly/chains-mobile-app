import React from "react";
import TabNavigator from "./src/screens/TabNavigator";
import Toast from "react-native-toast-message";
import { HabitProvider } from "./src/state/HabitContext";

export default function App() {
  return (
    <>
      <HabitProvider>
        <TabNavigator />
        <Toast ref={(ref) => Toast.setRef(ref)}></Toast>
      </HabitProvider>
    </>
  );
}
