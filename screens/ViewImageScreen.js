import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name='close'
          color={colors.white}
          size={30}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='delete'
          color={colors.white}
          size={30}
        ></MaterialCommunityIcons>
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    right: 30,
    top: 40,
    position: "absolute",
  },

  image: { width: "100%", height: "100%" },
});

export default ViewImageScreen;
