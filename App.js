import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faQuestion, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import FooterMenu from './components/FooterMenu';
import HomeScreen from './components/screens/HomeScreen';
import AccountScreen from './components/screens/AccountScreen';
import FeedScreen from './components/screens/FeedScreen';

/* add fav icons (from FontAwesome) into the library
  this is done so you don't have to import individual icons each time you want 
  to use them */
library.add(faHome, faQuestion, faUser, faNewspaper);

// bottom navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions= {{ 
        inactiveBackgroundColor: '#2c35bf',
        activeBackgroundColor: '#2c35bf',
        activeTintColor: '#0dd61a',
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={ HomeScreen }
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="home" color={ color } size={ 32 } />
          )
        }}
      />

      <Tab.Screen
        name="Account"
        component={ AccountScreen }
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="user" color={ color } size={ 32 } />
          )
        }}
      />

      <Tab.Screen
        name="Feed"
        component={ FeedScreen } 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon="newspaper" color={ color } size={ 32 } />
          )
        }}
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
