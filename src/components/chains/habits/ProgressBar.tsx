import React from "react";
import { View } from "react-native";
import styles from "../../../common/MainStyles";

export interface IProgressBar {
  inProgress: boolean;
}

const ProgressBar = (props: IProgressBar) => {
  const { inProgress } = props;

  return (
    <View
      style={[
        styles.progressBar,
        inProgress ? styles.complete : styles.incomplete,
      ]}
    ></View>
  );
};

export default ProgressBar;
