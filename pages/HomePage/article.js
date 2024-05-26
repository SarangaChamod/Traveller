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
import Data from "./../../assets/Data/article.json";
import ViewAllButton from "./components/viewAllButton";



function MostRelevantFlatList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Title}>
        <Text style={styles.sectionTitle}>Popular article</Text>
        <ViewAllButton/>
      </View>

      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ gap: 5 ,}}
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.TouchaBackground}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.flatContainer}>
              <View style={styles.flatView}>
                <Text style={styles.nameWithRate}>{item.name}</Text>
              </View>
              <View style={styles.HotelDescription}>
                <Text style={styles.items}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 7,
  },
  TouchaBackground: {
    width: 175,
    height: 240,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    marginBottom: 15,
    marginRight: 10,
  },
  image: {
    width: 175,
    height: 140,
    borderRadius: 25,
  },
  flatView: {
    flexDirection: "row",
    paddingTop: 7,
    justifyContent: "space-between",
  },
  flatContainer: {
    paddingHorizontal: 12,
  },
  HotelDescription: {
    flexDirection: "row",
    marginTop: 3,
  },
  items: {
    fontSize: 12,
    color: "#808080",
  },
  Title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 12,
    alignItems:'center',
  }
});

export default MostRelevantFlatList;
