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
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchAPI = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setBusinesses(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong. Try again later.');
        }
    };

    return (
        <View>
            <SearchBar 
                onTermChange={setTerm}
                onTermSubmit={searchAPI}
                term={term}
            />
            <Text>We have found {businesses.length} businesses.</Text>
            { errorMessage ? <Text>{errorMessage}</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;