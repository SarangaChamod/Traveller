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
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import Data from "./../../../assets/Data/popularDestinations.json";
import { useNavigation } from "@react-navigation/native";

function Destinations() {
  const navigation = useNavigation();
  const handleIconPress = (destination) => {
    // Handle the icon press action here
    console.log(`Icon pressed for destination: ${destination.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.sectionTitle}>Popular Destinations</Text>
        <Feather name="search" size={27} color="black" />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.touchableBackground}
          onPress={() => navigation.navigate("DetailScreen", { item })}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <TouchableOpacity 
                style={styles.iconOverlay}
                onPress={() => handleIconPress(item)}
              >
                
                <AntDesign name="staro" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.flatContainer}>
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
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 7,
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 12,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  touchableBackground: {
    width: "100%",
    height: 290,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 230,
    borderRadius: 15,
  },
  iconOverlay: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    borderRadius: 40,
    padding: 5,
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
    fontSize: 17,
  },
  flatContainer: {
    paddingHorizontal: 12,
  },
  location: {
    fontSize: 12.5,
    fontWeight: "500",
    color: "#808080",
  },
 
});

export default Destinations;
