// REACT
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BusinessList = ({ title, businesses }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {businesses.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',

    }
});

export default BusinessList;