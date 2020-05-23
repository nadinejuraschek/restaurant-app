// REACT
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// MIDDLEWARE
import yelp from '../api/yelp';

// COMPONENTS
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ businesses, setBusinesses ] = useState([]);

    const searchAPI = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
        setBusinesses(response.data.businesses);
    };

    return (
        <View>
            <SearchBar 
                onTermChange={setTerm}
                onTermSubmit={searchAPI}
                term={term}
            />
            <Text>We have found {businesses.length} businesses.</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;