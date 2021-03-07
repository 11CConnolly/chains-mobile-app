import React from "react";
import TabNavigator from "./src/screens/TabNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <TabNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)}></Toast>
    </>
  );
}
