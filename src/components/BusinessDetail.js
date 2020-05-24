// REACT
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BusinessDetail = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business.image_url }} style={styles.image} />
      <Text style={styles.name}>{ business.name }</Text>
      <Text>{ business.rating } Stars, { business.review_count } Reviews</Text>
    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    borderRadius: 4,
    height: 150,
    marginBottom: 5,
    width: 250
  },
  name: {
    fontWeight: 'bold'
  }
});

export default BusinessDetail;