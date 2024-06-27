import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const windowHeight = Dimensions.get("window").height;
  const imageHeight = windowHeight * 0.4;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={[styles.image, { height: imageHeight }]}
          />
          <View style={styles.iconContainer}>
            <View style={styles.leftIconContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.rightIconContainer}>
              <TouchableOpacity
                style={styles.rightSideButtons}
                onPress={() => navigation.goBack()}
              >
                <FontAwesome6 name="save" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rightSideButtons}
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="sharealt" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.locationText}>{item.location}</Text>
          <Text style={styles.Text}>{item.AboutPlace}</Text>
          <Text style={styles.subTitles}>Getting To {item.name}</Text>
          <Text style={styles.Text}>{item.GettingToPlace}</Text>
          <Text style={styles.subTitles}>Best Time To Visit</Text>
          <Text style={styles.Text}>{item.BestTimeToVisit}</Text>
          <Text style={styles.subTitles}>Must See Attraction</Text>
          <Text style={styles.Text}>{item.MustSeeAttraction}</Text>
          <Text style={styles.subTitles}>Local Cuisine</Text>
          <Text style={styles.Text}>{item.LocalCuisine}</Text>
          <Text style={styles.subTitles}>Activities And Experiences</Text>
          <Text style={styles.Text}>{item.ActivitiesAndExperiences}</Text>
          <Text style={styles.subTitles}>Accommodations</Text>
          <Text style={styles.Text}>{item.Accommodations}</Text>
          <Text style={styles.subTitles}>Transportation</Text>
          <Text style={styles.Text}>{item.Transportation}</Text>
          <Text style={styles.subTitles}>Safety And Health Tips</Text>
          <Text style={styles.Text}>{item.SafetyAndHealthTips}</Text>
          <Text style={styles.subTitles}>Currency</Text>
          <Text style={styles.Text}>{item.Currency}</Text>
          <Text style={styles.subTitles}>Visa And Entry Requirements</Text>
          <Text style={styles.Text}>{item.VisaAndEntryRequirements}</Text>
        </View>
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={styles.fixedButton}
          onPress={() => console.log("Button Pressed")}
        >
          <Text style={styles.fixedButtonText}>Start a Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 65,
  },
  imageContainer: {
    position: "relative",
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  rightIconContainer: { flexDirection: "row" },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  backButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 5,
  },
  rightSideButtons: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 5,
    marginLeft: 12,
  },
  subContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 26,
    marginTop: 8,
    fontWeight: "500",
  },
  locationText: {
    fontSize: 16,
    color: "#353935",
    marginVertical: 5,
    fontWeight: "500",
  },
  Text: {
    fontSize: 16,
    color: "#353935",
  },
  subTitles: {
    fontSize: 17,
    fontWeight: "500",
    marginVertical: 8,
  },
  fixedButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingTop: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  fixedButton: {
    backgroundColor: "#171717",
    paddingVertical: 10,
    width: "100%",
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  fixedButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default DetailScreen;
