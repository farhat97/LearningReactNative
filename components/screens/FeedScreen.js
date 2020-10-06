import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedScreen = () => {
    return(
        <View style={styles.container}>
            <Text> This is the feed screen </Text>    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FeedScreen;