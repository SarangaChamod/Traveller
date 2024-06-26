// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './components/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

export default App;
