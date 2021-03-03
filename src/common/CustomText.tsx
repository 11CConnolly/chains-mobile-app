import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts, Kalam_300Light } from "@expo-google-fonts/kalam";

const CustomText = (props: any) => {
  let [fontsLoaded] = useFonts({
    Kalam_300Light,
  });

  if (!fontsLoaded) return <></>;

  return (
    <Text
      style={{
        fontFamily: "Kalam_300Light",
      }}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
