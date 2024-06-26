import React from "react";
import {  Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ViewAllButton = ({ onPress}) => {
  return (
    <TouchableOpacity
      style={styles.viewAllContainer}
      onPress={onPress}
    >
      <Text style={styles.viewAll}>view all </Text>
      <AntDesign name="arrowright" size={18} color="#171717" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    fontSize: 14,
    color: "#171717",
  },
  viewAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ViewAllButton;
