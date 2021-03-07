import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import styles, { CLOUDS_WHITE, LIGHT_GREEN } from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import { useFonts, Kalam_300Light } from "@expo-google-fonts/kalam";
import * as Animatable from "react-native-animatable";
import { sleep } from "../../utils/utils";

const TopBar = (props: any) => {
  const { chains } = useContext(HabitContext);

  const [finishedChains, setFinishedChains] = useState(0);
  const [done, setDone] = useState(false);

  const animateChangeRef = useRef(null);
  const animateTextRef = useRef(null);
  const animateDoneRef = useRef(null);

  useEffect(() => {
    finishedChains !== completeChains && handleChange(completeChains);
  }, [chains]);

  const completeChains = chains.reduce(
    (sum, chain) => sum + (chain.isComplete ? 1 : 0),
    0
  );

  const handleChange = (completeChains: number) => {
    // Change new finished habits
    setFinishedChains(completeChains);

    // Handle animations
    if (completeChains === chains.length) {
      animateChangeRef.current?.bounce(1600);
      setDone(true);
      sleep(25)
        .then(() => {
          animateTextRef.current?.bounce(1600);
        })
        .then(() => {
          sleep(25).then(() => {
            animateDoneRef.current?.bounce(1600);
          });
        });
    } else if (animateChangeRef) {
      setDone(false);
      animateChangeRef.current?.bounce(800);
    }
  };

  let [fontsLoaded] = useFonts({
    Kalam_300Light,
  });

  if (!fontsLoaded) return <></>;

  return (
    <View style={styles.topBar}>
      <Animatable.View ref={animateChangeRef}>
        <Text
          style={{
            ...styles.chainCount,
            fontFamily: "Kalam_300Light",
            color: done ? LIGHT_GREEN : CLOUDS_WHITE,
          }}
        >
          {finishedChains}
        </Text>
      </Animatable.View>

      <Animatable.View ref={animateTextRef}>
        <Text
          style={{
            ...styles.chainCount,
            fontSize: 24,
            fontFamily: "Kalam_300Light",
            color: done ? LIGHT_GREEN : CLOUDS_WHITE,
          }}
        >
          {" "}
          out of{" "}
        </Text>
      </Animatable.View>

      <Animatable.View ref={animateDoneRef}>
        <Text
          style={{
            ...styles.chainCount,
            fontFamily: "Kalam_300Light",
            color: done ? LIGHT_GREEN : CLOUDS_WHITE,
          }}
        >
          {chains.length}
        </Text>
      </Animatable.View>
    </View>
  );
};

export default TopBar;
