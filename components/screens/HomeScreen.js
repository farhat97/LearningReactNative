import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}> This is the Home Page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    homeText: {
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default HomeScreen;
