// REACT
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

// SCREENS
import SearchScreen from './src/screens/SearchScreen';
import ShowScreen from './src/screens/ShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Show: ShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);