import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { ScrollView } from "react-native-gesture-handler";

function ListingDetailsScreen({ route }) {
  const lisitng = route.params;

  return (
    <ScrollView>
      <Image style={styles.image} source={lisitng.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{lisitng.title}</Text>
        <Text style={styles.price}>${lisitng.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title='Mosh Hamedani'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
