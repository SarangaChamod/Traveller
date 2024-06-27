// components/HomeStackNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation';

import HomePage from './../pages/HomePage/homePage';
import MyTripPage from './../pages/MyTipsPage/myTips';
import SavedPage from './../pages/SavedPage/saved';
import SettingsPage from './../pages/SettingsPage/settings';

import ArticleFullPage from './../pages/HomePage/HomeFullLists/Article';
import DestinationsFullPage from './../pages/HomePage/HomeFullLists/Destinations';

import PopularDestinations from '../pages/HomePage/mostRelevant';
import DetailScreen from '../pages/HomePage/components/DetailScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="MyTripPage" component={MyTripPage} />
    <Stack.Screen name="SavedPage" component={SavedPage} />
    <Stack.Screen name="SettingsPage" component={SettingsPage} />
    <Stack.Screen name="ArticleFullPage" component={ArticleFullPage} options={{ headerShown: false }}/>
    <Stack.Screen name="DestinationsFullPage" component={DestinationsFullPage} options={{ headerShown: false }}/>
    <Stack.Screen name='PopularDestinations' component={PopularDestinations} options={{ headerShown: false }}/>
    <Stack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }}/>

  </Stack.Navigator>
);

export default HomeStackNavigator;
