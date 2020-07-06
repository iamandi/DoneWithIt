import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableHighlight } from "react-native-gesture-handler";

function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.profileContainer}>
        <Image style={styles.profilePic} source={image} />
        <View>
          <AppText style={styles.name}>{title}</AppText>
          <AppText style={styles.listings}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  listings: {
    color: colors.grey,
    fontSize: 14,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  profileContainer: {
    flexDirection: "row",
    padding: 15,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListItem;
