import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

const viewAllButton = () => {
  return (
    <TouchableOpacity
      style={styles.viewAllContainer}
      onPress={() => {
        console.log("You tapped the button!");
      }}
    >
      <Text style={styles.viewAll}>view all </Text>
      <AntDesign name="arrowright" size={18} color="#0071ff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    fontSize: 14,
    color: "#0071ff",
  },
  viewAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default viewAllButton;
