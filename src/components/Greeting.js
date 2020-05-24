import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Greeting = ({ greeting }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>
    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Greeting;
