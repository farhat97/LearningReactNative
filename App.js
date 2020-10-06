import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; 

import FooterMenu from './components/FooterMenu';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';
import FeedScreen from './components/screens/FeedScreen';

// bottom navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ HomeScreen }
      />

      <Tab.Screen
        name="About"
        component={ AboutScreen }
      />

    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />  
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default App;
