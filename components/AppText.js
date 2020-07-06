import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.appText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  appText: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "AmericanTypewriter",
  },
});

export default AppText;
