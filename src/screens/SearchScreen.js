// REACT
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// MIDDLEWARE
import yelp from '../api/yelp';

// COMPONENTS
import SearchBar from '../components/SearchBar';

// HOOKS
import useBusinesses from '../hooks/useBusinesses';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ businesses, errorMessage, greeting, searchAPI ] = useBusinesses();

    return (
        <View>
            <SearchBar 
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
                term={term}
            />
            <Text>{greeting}</Text>
            <Text>We have found {businesses.length} businesses.</Text>
            { errorMessage ? <Text>{errorMessage}</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;