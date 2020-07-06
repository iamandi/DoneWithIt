import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title }) {
  return (
    <View style={styles.button}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default AppButton;
