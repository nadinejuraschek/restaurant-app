// REACT
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// COMPONENTS
import BusinessDetail from './BusinessDetail';

const BusinessList = ({ title, businesses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        data={businesses}
        horizontal
        keyExtractor={business => business.id}
        renderItem={({ item }) => {
          return <BusinessDetail business={item} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10
  }
});

export default BusinessList;