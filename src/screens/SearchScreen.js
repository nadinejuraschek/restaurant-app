// REACT
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// MIDDLEWARE
import yelp from '../api/yelp';

// COMPONENTS
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ businesses, setBusinesses ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setBusinesses(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong. Try again later.');
        }
    };

    // call searchAPI when component is first rendered
    useEffect(() => {
        const time = new Date().getHours();
        let defaultTerm = '';
        if (time > 6 && time < 11) {
            defaultTerm = 'breakfast';
        } else if (time >= 11 && time < 14) {
            defaultTerm = 'lunch';
        } else if (time >= 14 && time < 22) {
            defaultTerm = 'dinner';
        } else {
            defaultTerm = 'sandwich';
        };
        console.log(defaultTerm);
        searchAPI(defaultTerm);
    }, []);

    return (
        <View>
            <SearchBar 
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
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