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
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/134853914.jpg?k=20b8e4341a5e59bdad9cb5668a3808d0ab470927eefc9f9ec7c8a8aef1a5c512&o=&hp=1",
    name: "Lakewood Residence",
    guests: "4",
    rate: "4.80 (480)",
    bedrooms: "2",
    beds: "2",
    bathroom: "1",
    price: "19,000",
    totalPrice: "24,000",
  },
  {
    id: "2",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/82093876.jpg?k=0e2622ff9ceca1c0520fc8edb1ae1f089485429ea41841226de5dfeae4d93249&o=&hp=1",
    name: "Sky Lodge",
    guests: "8",
    rate: "4.62 (312)",
    bedrooms: "3",
    beds: "4",
    bathroom: "2",
    price: "15,000",
    totalPrice: "18,000",
  },
  {
    id: "3",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/527451682.jpg?k=796af62a6ce22144094117a5a42e4e84c3b8736fb731932f122b5cff8b272fb7&o=&hp=1",
    name: "Ceylon's House",
    guests: "2",
    bed_room: "",
    rate: "3.94 (240)",
    bedrooms: "1",
    beds: "1",
    bathroom: "1",
    price: "14,000",
    totalPrice: "17,500",
  },
  {
    id: "4",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/159043924.jpg?k=5d075cdf9ce41725ea891640e58ac5e8a8a289bf1791d91fe678bc02ca4a1bf4&o=&hp=1",
    name: "Grand Casa",
    guests: "2",
    rate: "4.95 (624)",
    bedrooms: "2",
    beds: "2",
    bathroom: "1",
    price: "13,500",
    totalPrice: "16,000",
  },

  {
    id: "5",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/496172602.jpg?k=0a0e198dd3cf31fcac9d2da432db4e1a359c11883e7afbad5f784ff36b37a4d3&o=&hp=1",
    name: "CJ's House at Mawella",
    guests: "4",
    rate: "2.34 (112)",
    bedrooms: "3",
    beds: "3",
    bathroom: "2",
    price: "17,000",
    totalPrice: "20,000",
  },
];

function mostRelevantFlatList() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>The most relevant</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.TouchaBackground}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 340,
                height: 230,
                borderRadius: 25,
              }}
            />
            <View style={styles.flatConatiner}>
              <View style={styles.flatView}>
                <Text style={styles.nameWithRate}>{item.name}</Text>
                <View style={styles.RateView}>
                  <AntDesign
                    name="star"
                    size={19}
                    color="black"
                    style={{ marginRight: 4 }}
                  />
                  <Text style={styles.nameWithRate}>{item.rate}</Text>
                </View>
              </View>
              <View style={styles.HotalDescription}>
                <Text style={styles.items}>{item.guests}</Text>
                <Text style={styles.AboutHotal}>guests •</Text>
                <Text style={styles.items}>{item.bedrooms}</Text>
                <Text style={styles.AboutHotal}>bedrooms •</Text>
                <Text style={styles.items}>{item.beds}</Text>
                <Text style={styles.AboutHotal}>beds •</Text>
                <Text style={styles.items}>{item.beds}</Text>
                <Text style={styles.AboutHotal}>bathroom </Text>
              </View>
              <View style={styles.HotalDescription}>
                <Text style={styles.price}>LKR {item.price}</Text>
                <Text style={styles.AboutHotal}> • </Text>
                <Text style={styles.items}>LKR {item.totalPrice}</Text>
                <Text style={styles.AboutHotal}>Total</Text>
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
    width: 340,
    height: 315,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  flatView: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  RateView: {
    flexDirection: "row",
  },
  nameWithRate: {
    fontWeight: "500",
    fontSize: 14,
  },
  flatConatiner: {
    paddingHorizontal: 12,
  },
  HotalDescription: {
    flexDirection: "row",
    marginTop: 3,
  },
  AboutHotal: {
    fontSize: 12,
    marginHorizontal: 3,
    color: "#808080",
  },
  items: {
    fontSize: 12,
    color: "#808080",
  },
  price: {
    fontSize: 12.5,
    fontWeight: "500",
  },
});

export default mostRelevantFlatList;
