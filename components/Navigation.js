import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTrips from "../pages/MyTipsPage/myTips.jsx";
import HomePage from "../pages/HomePage/homePage.jsx";
import Saved from "../pages/SavedPage/saved.jsx";
import Settings from "../pages/SettingsPage/settings.jsx";

import { AntDesign, Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: Styles.conatiner,
        tabBarItemStyle: Styles.tabItem,
        tabBarActiveTintColor: "#171717",
        tabBarInactiveTintColor: "gray",
      }}
      safeAreaInsets={{ bottom: 0 }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={23}
              color={focused ? "#171717" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="appstore-o"
              size={23}
              color={focused ? "#171717" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Trips"
        component={MyTrips}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="location"
              size={23}
              color={focused ? "#171717" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              size={23}
              color={focused ? "#171717" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Styles = StyleSheet.create({
  conatiner: {
    position: "absolute",
    width: "94%",
    left: "3%",
    bottom: 20,
    height: 60,
    borderRadius: 12,
  },
  tabItem: {
    marginBottom: 6,
  },
});
