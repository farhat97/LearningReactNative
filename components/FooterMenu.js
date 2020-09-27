import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterMenu = () => {
    return(
        <View style={styles.container}>
            <Text> This is the Footer Menu </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 65,
        padding: 10,
        backgroundColor: '#313bcc'
    }
});

export default FooterMenu;