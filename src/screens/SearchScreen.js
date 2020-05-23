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
      <Greeting greeting={greeting} businesses={businesses.length} />
      { errorMessage ? <ErrorMessage error={errorMessage} /> : null }
      <BusinessList businesses={filterBusinessesByPrice('$')} title="Cost Effective" />
      <BusinessList businesses={filterBusinessesByPrice('$$')} title="Affordable" />
      <BusinessList businesses={filterBusinessesByPrice('$$$')} title="Pricy" />
      <BusinessList businesses={filterBusinessesByPrice('$$$$')} title="Big Spender" />
    </View>
  );
};

export default SearchScreen;