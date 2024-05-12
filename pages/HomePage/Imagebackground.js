import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome6, Feather, MaterialIcons } from "@expo/vector-icons";

function IBcomponent() {
  return (
    <View style={styles.IBcontainer}>
      <View style={styles.IBCityandProfileContainer}>
        <View style={styles.IBCityContainer}>
          <FontAwesome6 name="location-arrow" size={17} color="white" />
          <Text style={styles.cityText}>City</Text>
        </View>
        <MaterialIcons name="account-circle" size={24} color="white" />
      </View>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Hey, Traveler! Tell us where you </Text>
        <Text style={styles.title}>want to go </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.searchIcon}>
          <Feather name="search" size={22} color="white" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Search places"
          placeholderTextColor="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  IBcontainer: {
    marginHorizontal: 12,
  },
  IBCityContainer: {
    flexDirection: "row",
  },
  IBCityandProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cityText: {
    color: "white",
    fontSize: 15,
    marginLeft: 5,
  },
  titlecontainer: { marginTop: 18 },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    shadowOpacity: 100,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 27,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    borderRadius: 60,
  },
  input: {
    width: "100%",
    height: 55,
    padding: 10,
    color: "white",
    paddingLeft: -5,
    fontWeight:'500',
    fontSize:14.5
  },
  searchIcon: {
    padding: 10,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default IBcomponent;
