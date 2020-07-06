import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListingItem from "../components/ListItem";

function Listingdetailsscreen(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket</AppText>
        <AppText style={styles.price}>$500</AppText>
        <ListingItem
          title='Mosh Hamedani'
          subTitle='5 Listings'
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: { padding: 20 },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    marginBottom: 7,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Listingdetailsscreen;
