import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Strings from '../../../Constants/Strings';
import Config from '../../../Constants/config';
import Endpoints from '../../../Constants/EndPoints';
import {useNavigation} from '@react-navigation/native';

const Info = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.titleTxt}>{title} </Text>
      <Text style={styles.valTxt}>{value}</Text>
    </View>
  );
};

const Product = ({products}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerStyle={{
        justifyContent: 'center',
      }}
      keyExtractor={(_, index) => index?.toString()}
      renderItem={({item, index}) => (
        <View style={styles.Container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductInfo', {productid: item});
            }}>
            <Image source={{uri: item.image}} style={styles.ProductsImg} />
            <View style={styles.infoContainer}>
              <Info title={Strings.title} value={item.title} />
              <Info title={Strings.category} value={item.category} />
              <Info title={Strings.price} value={item.price} />
            </View>
            {/* {productID: item?.id} */}
            {/* const {productID} = props?.route?.params; */}
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Product;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginHorizontal: 2,
    marginBottom: 10,
    elevation: 3,
  },
  infoContainer: {
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  ProductsImg: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: '100%',
    borderWidth: 10,
    height: 130,
  },
  titleTxt: {
    color: '#000',
  },
  valTxt: {
    color: '#4c4c4c',
  },
});
