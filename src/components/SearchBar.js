// REACT
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

// ICONS
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather style={styles.icon} name="search" size={30} color="black" />
            <TextInput style={styles.input} placeholder="Search" />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        backgroundColor: '#f0eeee',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        margin: 15
    },
    icon: {
        alignSelf: 'center',
        fontSize: 30,
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;