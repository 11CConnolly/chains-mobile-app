import React from "react";
import { Text, TextProps } from "react-native";
import {
  useFonts,
  Kalam_300Light,
  Kalam_400Regular,
} from "@expo-google-fonts/kalam";
import { BalsamiqSans_400Regular } from "@expo-google-fonts/balsamiq-sans";

export interface ICustomText extends TextProps {
  style?: any;
  children?: any;
  heavy?: boolean;
  sansSerif?: boolean;
}

const CustomText = (props: ICustomText) => {
  const { style, sansSerif = false, heavy = false, children } = props;

  let [fontsLoaded] = useFonts({
    Kalam_300Light,
    Kalam_400Regular,
    BalsamiqSans_400Regular,
  });

  if (!fontsLoaded) return <></>;

  return (
    <Text
      style={{
        ...props.style,
        fontFamily: props.sansSerif
          ? "sans-serif"
          : props.heavy
          ? "Kalam_400Regular"
          : "Kalam_300Light",
      }}
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
