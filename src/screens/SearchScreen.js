// REACT
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// MIDDLEWARE
import yelp from '../api/yelp';

// COMPONENTS
import BusinessList from '../components/BusinessList';
import ErrorMessage from '../components/ErrorMessage';
import Greeting from '../components/Greeting';
import SearchBar from '../components/SearchBar';

// HOOKS
import useBusinesses from '../hooks/useBusinesses';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ businesses, errorMessage, greeting, searchAPI ] = useBusinesses();

    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price;
        });
    };

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
            <BusinessList businesses={filterBusinessesByPrice('$')} title="Name" />
            <BusinessList businesses={filterBusinessesByPrice('$$')} title="Name" />
            <BusinessList businesses={filterBusinessesByPrice('$$$')} title="Name" />
            <BusinessList businesses={filterBusinessesByPrice('$$$$')} title="Name" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;