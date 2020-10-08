import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}> This is the feed screen </Text>    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        fontSize: 33
    }
});

export default FeedScreen;