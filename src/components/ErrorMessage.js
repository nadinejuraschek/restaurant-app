// REACT
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({ error }) => {
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    marginLeft: 10
  }
});

export default ErrorMessage;