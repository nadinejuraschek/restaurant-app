// REACT
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// COMPONENTS
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [ term, setTerm ] = useState();

    return (
        <View>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;