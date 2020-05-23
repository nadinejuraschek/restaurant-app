import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Greeting = ({ greeting, businesses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>
      <Text>We have found {businesses} businesses.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 5
  }
});

export default Greeting;