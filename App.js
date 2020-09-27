import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FooterMenu from './components/FooterMenu';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />
      <FooterMenu />
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen, 
    navigationOptions: { headerShown: false } 
  },
  About: { 
    screen: AboutScreen,
    navigationOptions: { headerShown: false } 
  }
});

const AppContainer = createAppContainer(AppNavigator);

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
