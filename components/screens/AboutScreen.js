import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is the About Page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    aboutText: {
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default AboutScreen;
