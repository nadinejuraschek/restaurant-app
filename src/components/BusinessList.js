// REACT
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

// COMPONENTS
import BusinessDetail from './BusinessDetail';

const BusinessList = ({ businesses, title, navigation }) => {
  if ( businesses == 0) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
          data={businesses}
          horizontal
          keyExtractor={business => business.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                <BusinessDetail business={item} />
              </TouchableOpacity>
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
};

// STYLESHEET
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

export default withNavigation(BusinessList);