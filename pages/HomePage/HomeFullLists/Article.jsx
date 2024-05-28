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
import { Feather, Ionicons } from "@expo/vector-icons";
import Data from "./../../../assets/Data/article.json";

function Article() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TitleContainer}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.sectionTitle}>Popular Article</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Data}
        contentContainerStyle={{ gap:15 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.TouchaBackground}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 230,
                borderRadius: 15,
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
              <Text style={styles.location}> {item.date}</Text>
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
    marginLeft: "25%",
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 12,
  },

  title: {
    fontSize: 16,
  },
  TouchaBackground: {
    width: "100%",
    height: 290,
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
    fontSize: 17,
  },
  flatConatiner: {
    paddingHorizontal: 12,
  },
  location: {
    fontSize: 12.5,
    fontWeight: "500",
    color: "#808080",
  },
  TitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Article;
