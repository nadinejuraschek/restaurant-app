// REACT
import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

// MIDDLEWARE
import yelp from '../api/yelp';

// ICONS
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const [ result, setResult ] = useState(null);
  const id = navigation.getParam('id');

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <View style={styles.detail}>
        <AntDesign name="star" size={30} style={styles.star} />
        <Text>{result.rating}</Text>
      </View>
      <View style={styles.detail}>
        <FontAwesome5 name="phone" size={24} style={styles.phone} />
        <Text>{result.phone}</Text>
      </View>
      <FlatList 
        data={result.photos}
        horizontal
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image source={{ uri: item }} style={styles.image} />
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    detail: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    image: {
        borderRadius: 4,
        height: 150,
        marginRight: 10,
        marginBottom: 5,
        width: 200
    },
    phone: {
        color: 'grey',
        marginRight: 10,
        marginLeft: 5
    },
    star: {
        color: 'gold',
        marginRight: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
    }
});

export default ShowScreen;