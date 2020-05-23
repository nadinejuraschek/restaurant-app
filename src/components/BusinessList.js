// REACT
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const BusinessList = ({ title, businesses }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                data={businesses}
                horizontal
                keyExtractor={business => business.id}
                renderItem={({ item }) => {
                    return <Text>{ item.name }</Text>
                }}
            />
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