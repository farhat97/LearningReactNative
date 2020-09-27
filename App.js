import React from 'react';
import { View, Text, StyleSheet, TabBarIOS } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FooterMenu from './components/FooterMenu';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';

// bottom navigation
const bottomTabs = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen }
});
const AppContainer = createAppContainer(bottomTabs);

const App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
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
