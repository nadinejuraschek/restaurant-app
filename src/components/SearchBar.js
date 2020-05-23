// REACT
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

// ICONS
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather 
                name="search"
                size={30}
                style={styles.icon}
            />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                placeholder="Search" 
                style={styles.input} 
                value={term}
            />
        </View>
    );
};

// STYLESHEET
const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        backgroundColor: '#f0eeee',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        margin: 10
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