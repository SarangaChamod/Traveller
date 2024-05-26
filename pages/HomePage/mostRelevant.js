import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Data from './../../assets/Data/popularDestinations.json';

import ViewAllButton from "./components/viewAllButton";



function mostRelevantFlatList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={styles.sectionTitle}>Popular Destinations</Text>
        <ViewAllButton/>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.TouchaBackground}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 280,
                height: 190,
                borderRadius: 25,
              }}
            />
            <View style={styles.flatConatiner}>
              <View style={styles.flatView}>
                <Text style={styles.nameWithRate}>{item.name}</Text>
                <View style={styles.moreIcon}>
                  <Feather
                    name="more-vertical"
                    size={24}
                    color="black"
                    style={{ marginRight: 4 }}
                  />
                </View>
              </View>
              <Text style={styles.location}> {item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 7,
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 12,
  },

  title: {
    fontSize: 16,
  },
  TouchaBackground: {
    width: 280,
    height: 260,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  flatView: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  moreIcon: {
    flexDirection: "row",
  },
  nameWithRate: {
    fontWeight: "500",
    fontSize: 14,
  },
  flatConatiner: {
    paddingHorizontal: 12,
  },
  location: {
    fontSize: 12.5,
    fontWeight: "500",
    color: "#808080",
  },
  Title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 12,
    alignItems:'center',
  },
});

export default mostRelevantFlatList;
