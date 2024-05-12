import { View, ImageBackground } from "react-native";
import React from "react";

import IBcomponent from "./Imagebackground.js";
import MostRelevantFlatList from "./mostRelevant.js";

const homePage = () => {
  return (
    <View style={{  backgroundColor: '#F0F0F0', height:'100%' }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1631635589499-afd87d52bf64?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode="cover"
        imageStyle={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}
      >
        <IBcomponent />
      </ImageBackground>
      <MostRelevantFlatList />
    </View>
  );
};

export default homePage;
