import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Switch,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import AppButton from "./components/AppButton";
import AppText from "./components/AppText";
import Card from "./components/Card";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import Screen from "./components/Screen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import Messagesscreen from "./screens/MessagesScreen";
import AccountScreen from "./screens/AccountScreen";
import ListingScreen from "./screens/ListingScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <Messagesscreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 30,
  },
});
