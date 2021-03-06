import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import BurgerMenu from "./BurgerMenu";
import styles from "../../common/styles";
import { HabitContext } from "../../state/HabitContext";
import CustomText from "../../common/CustomText";
import { createAnimatableComponent } from "react-native-animatable";

const TopBar = (props: any) => {
  const { chains } = useContext(HabitContext);

  const [finishedChains, setFinishedChains] = useState(0);

  useEffect(() => {
    finishedChains !== completeChains && handleChange(completeChains);
  }, [chains]);

  const completeChains = chains.reduce(
    (sum, chain) => sum + (chain.isComplete ? 1 : 0),
    0
  );

  const handleChange = (completeChains: number) => {
    setFinishedChains(completeChains);
  };

  const finishedRef = useRef(null);

  const AnimatedCustomText = createAnimatableComponent(CustomText);

  return (
    <View style={styles.topBar}>
      <BurgerMenu />
      <CustomText style={styles.chainCount}>
        <AnimatedCustomText style={styles.chainCount} ref={finishedRef}>
          {finishedChains}
        </AnimatedCustomText>
        <CustomText style={{ ...styles.chainCount, fontSize: 24 }}>
          {" "}
          out of{" "}
        </CustomText>
        {chains.length}
      </CustomText>
      <BurgerMenu />
    </View>
  );
};

export default TopBar;
