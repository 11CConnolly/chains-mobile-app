import React from "react";
import { Text, TextProps } from "react-native";
import { useFonts, Kalam_300Light } from "@expo-google-fonts/kalam";

export interface ICustomText extends TextProps {
  style?: any;
  children?: any;
}

const CustomText = (props: ICustomText) => {
  let [fontsLoaded] = useFonts({
    Kalam_300Light,
  });

  if (!fontsLoaded) return <></>;

  return (
    <Text
      style={{
        ...props.style,
        fontFamily: "Kalam_300Light",
      }}
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
