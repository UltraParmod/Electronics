import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState();

  const _FunApi = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      // console.log('response', response.data);
      setData(response.data);
    } catch (error) {
      console.log('productsApi Error', error);
    }
  };

  useEffect(() => {
    _FunApi();
  }, []);
  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item?.id}
          renderItem={({item, index}) => (
            <View
              style={{padding: 10, backgroundColor: 'gray', marginBottom: 5}}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
