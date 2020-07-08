import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
            <AppText style={styles.name} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.description} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.grey}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  description: {
    color: colors.grey,
    fontSize: 14,
  },
  datailsContainer: { flex: 1, marginLeft: 10, justifyContent: "center" },
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
