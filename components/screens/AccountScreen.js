import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.accountText}> This is the Account Page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accountText: {
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default AccountScreen;
