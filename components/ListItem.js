import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {!image && IconComponent}
          {image && <Image style={styles.profilePic} source={image} />}
          <View style={styles.datailsContainer}>
            <AppText style={styles.name}>{title}</AppText>
            {subTitle && (
              <AppText style={styles.description}>{subTitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  description: {
    color: colors.grey,
    fontSize: 14,
  },
  datailsContainer: { marginLeft: 10, justifyContent: "center" },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListItem;
